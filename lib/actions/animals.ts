'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/utils/supabase/server'
import type { FormDataType } from '@/lib/types/form'
import { GeneralTraitsDbRecord } from '@/lib/types/form'
import { 
  transformFormToDbTraits, 
  transformDbToFormTraits,
  getUserFarm 
} from './animals.helpers'

// Modified to handle both creating new animals and updating existing ones
export async function submitFormData({ 
  formData, 
  animalId 
}: { 
  formData: FormDataType; 
  animalId: string; 
}) {
  try {
    const supabase = await createClient()
    
    // Check if we're creating a new animal
    const isNewAnimal = animalId === 'new';
    let newAnimalId: string | undefined;
    
    // If creating a new animal, we need to establish a new record first
    if (isNewAnimal) {
      // Get user's farm
      const { data: farmUser, error: farmError } = await getUserFarm();
      if (farmError || !farmUser) {
        return { error: typeof farmError === 'string' ? farmError : "No farm found for this user" };
      }
      
      // Create the base animal record
      const { data: animalRecord, error: animalError } = await supabase
        .from('animal_records')
        .insert({ farm_id: farmUser.farm_id })
        .select('id')
        .single();
      
      if (animalError) {
        console.error('Error creating animal record:', animalError);
        return { error: 'Failed to create new animal record' };
      }
      
      newAnimalId = animalRecord.id;
      // Now we'll use this ID for all related table operations
      if (!newAnimalId) {
        throw new Error('Failed to create new animal ID');
      }
      animalId = newAnimalId;
    }
    
    // Common function for handling database errors
    const handleError = (error: any, operation: string) => {
      console.error(`Error ${isNewAnimal ? 'creating' : 'updating'} ${operation}:`, error);
      return { error: `Failed to ${isNewAnimal ? 'create' : 'update'} ${operation}` };
    };
    
    // Update or create animal_metadata
    const metadataOperation = isNewAnimal 
      ? supabase.from('animal_metadata').insert({
          animal_id: animalId,
          auto_build_text: formData.animalMetadata.autoBuildText || '',
          edit_date1: formData.animalMetadata.editDate1 || null,
          edit_date2: formData.animalMetadata.editDate2 || null,
          limit_inputs: formData.animalMetadata.limitInputs || 'None',
          carcass_scanner_no: formData.animalMetadata.carcassScannerNo || '',
          show_wool_fleece: formData.animalMetadata.showWoolFleece ?? false
        })
      : supabase.from('animal_metadata').update({
          auto_build_text: formData.animalMetadata.autoBuildText || '',
          edit_date1: formData.animalMetadata.editDate1 || null,
          edit_date2: formData.animalMetadata.editDate2 || null,
          limit_inputs: formData.animalMetadata.limitInputs || 'None',
          carcass_scanner_no: formData.animalMetadata.carcassScannerNo || '',
          show_wool_fleece: formData.animalMetadata.showWoolFleece ?? false
        }).eq('animal_id', animalId);

    const { error: metadataError } = await metadataOperation;
    if (metadataError) return handleError(metadataError, 'animal metadata');

    // Update or create animal_identification
    const identificationOperation = isNewAnimal
      ? supabase.from('animal_identification').insert({
          animal_id: animalId,
          animal_ident: formData.animalIdentification.animalIdent,
          sire: formData.animalIdentification.sire,
          dam: formData.animalIdentification.dam,
          sex: formData.animalIdentification.sex,
          bt: formData.animalIdentification.bt,
          rt: formData.animalIdentification.rt,
          comment: formData.animalNotes.comment,
          status: formData.animalNotes.status
        })
      : supabase.from('animal_identification').update({
          animal_ident: formData.animalIdentification.animalIdent,
          sire: formData.animalIdentification.sire,
          dam: formData.animalIdentification.dam,
          sex: formData.animalIdentification.sex,
          bt: formData.animalIdentification.bt,
          rt: formData.animalIdentification.rt,
          comment: formData.animalNotes.comment,
          status: formData.animalNotes.status
        }).eq('animal_id', animalId);
    
    const { error: identificationError } = await identificationOperation;
    if (identificationError) return handleError(identificationError, 'animal identification');

    // Update or create animal_conception
    const conceptionOperation = isNewAnimal
      ? supabase.from('animal_conception').insert({
          animal_id: animalId,
          method: formData.animalConception.method || 0,
          date: formData.animalConception.date || null,
          lamb_ease: formData.animalConception.lambEase || 0,
          nickname: formData.animalConception.nickname || '',
          group: formData.animalNotes.group || 0
        })
      : supabase.from('animal_conception').update({
          method: formData.animalConception.method || 0,
          date: formData.animalConception.date || null,
          lamb_ease: formData.animalConception.lambEase || 0,
          nickname: formData.animalConception.nickname || '',
          group: formData.animalNotes.group || 0
        }).eq('animal_id', animalId);
    
    const { error: conceptionError } = await conceptionOperation;
    if (conceptionError) return handleError(conceptionError, 'animal conception data');

    // Transform generalTraits from nested format to flat database format
    const generalTraitsDbFormat = transformFormToDbTraits(formData.generalTraits, animalId);
    
    // Always use upsert for general_traits for consistency
    const { error: traitsError } = await supabase
      .from('general_traits')
      .upsert(generalTraitsDbFormat, {
        onConflict: 'animal_id',
        ignoreDuplicates: false
      });
    
    if (traitsError) return handleError(traitsError, 'animal traits');

    // Revalidate the relevant paths
    revalidatePath('/dashboard');
    revalidatePath('/manage/animals');
    if (!isNewAnimal) {
      revalidatePath(`/manage/animals/${animalId}`);
    }
    
    return { 
      success: true,
      animalId: newAnimalId // Return the new ID if we created one
    };
  } catch (error) {
    console.error('Error in submitFormData:', error);
    return { error: 'Failed to submit animal data' };
  }
}

export async function loadFormData(animalId?: string) {
  try {
    const supabase = await createClient()
    
    // Get authenticated user
    const { data: { user }} = await supabase.auth.getUser();
    if (!user) {
      return { error: 'User not authenticated' };
    }
    
    // Get user's farm
    const { data: farmUser, error: farmError } = await getUserFarm();
    if (farmError || !farmUser) {
      return { error: typeof farmError === 'string' ? farmError : "No farm found for this user" };
    }

    // Special case for new animal
    if (animalId === 'new') {
      return {
        data: {
          farmId: farmUser.farm_id,
          animalId: 'new',
          animalMetadata: {
            auto_build_text: '',
            edit_date1: null,
            edit_date2: null,
            limit_inputs: 'None',
            carcass_scanner_no: '',
            show_wool_fleece: false
          },
          animalIdentification: {
            animal_ident: '',
            sire: '',
            dam: '',
            sex: 0,
            bt: 0,
            rt: 0,
            comment: '',
            status: 0
          },
          animalConception: {
            method: 0,
            date: null,
            lamb_ease: 0,
            nickname: '',
            group: 0
          },
          generalTraits: {}
        }
      };
    }

    // Return an error if no animalId is provided
    if (!animalId) {
      return { error: 'Animal ID is required' };
    }

    // Query for the specific animal by ID
    const { data: animalData, error: animalError } = await supabase
      .from('animal_records')
      .select(`
        id,
        farm_id,
        created_at,
        animal_metadata (
          auto_build_text,
          edit_date1,
          edit_date2,
          limit_inputs,
          carcass_scanner_no,
          show_wool_fleece
        ),
        animal_identification (
          animal_ident,
          sire,
          dam,
          sex,
          bt,
          rt,
          comment,
          status
        ),
        animal_conception (
          method,
          date,
          lamb_ease,
          nickname,
          group
        ),
        general_traits (
          birth_date, birth_weight, birth_c_fat, birth_emd, birth_sc, birth_wec, birth_group,
          weaning_date, weaning_weight, weaning_c_fat, weaning_emd, weaning_sc, weaning_wec, weaning_group,
          ep_weaning_date, ep_weaning_weight, ep_weaning_c_fat, ep_weaning_emd, ep_weaning_sc, ep_weaning_wec, ep_weaning_group,
          p_weaning_date, p_weaning_weight, p_weaning_c_fat, p_weaning_emd, p_weaning_sc, p_weaning_wec, p_weaning_group,
          yearling_date, yearling_weight, yearling_c_fat, yearling_emd, yearling_sc, yearling_wec, yearling_group,
          hogget_date, hogget_weight, hogget_c_fat, hogget_emd, hogget_sc, hogget_wec, hogget_group,
          adult_date, adult_weight, adult_c_fat, adult_emd, adult_sc, adult_wec, adult_group,
          adult2_date, adult2_weight, adult2_c_fat, adult2_emd, adult2_sc, adult2_wec, adult2_group,
          adult3_date, adult3_weight, adult3_c_fat, adult3_emd, adult3_sc, adult3_wec, adult3_group,
          adult4_date, adult4_weight, adult4_c_fat, adult4_emd, adult4_sc, adult4_wec, adult4_group,
          adult5_date, adult5_weight, adult5_c_fat, adult5_emd, adult5_sc, adult5_wec, adult5_group
        )
      `)
      .eq('farm_id', farmUser.farm_id)
      .eq('id', animalId)
      .single();

    if (animalError) {
      console.error('Error fetching animal:', animalError);
      return { error: animalError.message || `Animal with ID ${animalId} not found` };
    }

    // Query for record_events data
    const { data: recordEvents, error: recordEventsError } = await supabase
      .from('record_events')
      .select('*')
      .eq('animal_id', animalId)
      .order('event_date', { ascending: true });
      
    if (recordEventsError) {
      console.error('Error fetching record events:', recordEventsError);
      // Don't return error - just log it since this is exploratory
    } else {
      // Log the record events data
      console.log('Record events data:', recordEvents);
    }

    // Transform general_traits data into a better nested structure
    const traits = animalData.general_traits as GeneralTraitsDbRecord;
    const generalTraits = transformDbToFormTraits(traits);

    return {
      data: {
        farmId: animalData.farm_id,
        animalId: animalData.id,
        animalMetadata: animalData.animal_metadata[0],
        animalIdentification: animalData.animal_identification[0],
        animalConception: animalData.animal_conception[0],
        generalTraits
      }
    };
  } catch (error) {
    console.error('Error in loadFormData:', error);
    return { error: 'Failed to load animal data' };
  }
}

export async function getAnimalsByFarm() {
  try {
    // Get user's farm
    const { data: farmUser, error } = await getUserFarm();
    
    // Check for both error and missing data
    if (error || !farmUser) {
      return { error: typeof error === 'string' ? error : "No farm found for this user" };
    }

    const supabase = await createClient();
    
    // Fetch all animals for this farm
    const { data: animals, error: animalsError } = await supabase
      .from('animal_records')
      .select(`
        id,
        created_at,
        animal_identification (
          animal_ident,
          sire,
          dam,
          sex,
          bt,
          rt,
          status
        )
      `)
      .eq('farm_id', farmUser.farm_id)
      .order('created_at', { ascending: false });

    if (animalsError) {
      console.error('Error fetching animals:', animalsError);
      return { error: animalsError.message };
    }

    return { data: animals };
  } catch (error) {
    console.error('Error in getAnimalsByFarm:', error);
    return { error: 'Failed to load animals' };
  }
}

export async function deleteAnimal(animalId: string) {
  try {
    const supabase = await createClient();
    
    // Verify user has permission to delete this animal
    const { data: farmUser, error: farmError } = await getUserFarm();
    if (farmError || !farmUser) {
      return { error: typeof farmError === 'string' ? farmError : "No farm found for this user" };
    }
    
    // Verify this animal belongs to the user's farm
    const { data: animal, error: animalCheckError } = await supabase
      .from('animal_records')
      .select('farm_id')
      .eq('id', animalId)
      .single();
      
    if (animalCheckError || !animal) {
      return { error: 'Animal not found' };
    }
    
    if (animal.farm_id !== farmUser.farm_id) {
      return { error: 'You do not have permission to delete this animal' };
    }
    
    // Delete the animal record (related records should cascade due to foreign key constraints)
    const { error: deleteError } = await supabase
      .from('animal_records')
      .delete()
      .eq('id', animalId);
    
    if (deleteError) {
      console.error('Error deleting animal:', deleteError);
      return { error: 'Failed to delete animal record' };
    }

    // Revalidate paths
    revalidatePath('/dashboard');
    revalidatePath('/manage/animals');
    
    return { success: true };
  } catch (error) {
    console.error('Error in deleteAnimal:', error);
    return { error: 'Failed to delete animal record' };
  }
}