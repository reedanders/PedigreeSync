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

export async function submitFormData({ 
  formData, 
  animalId 
}: { 
  formData: FormDataType; 
  animalId: string; 
}) {
  try {
    const supabase = await createClient()

    // Update animal_metadata
    const { error: metadataError } = await supabase
      .from('animal_metadata')
      .update({
        auto_build_text: formData.animalMetadata.autoBuildText,
        edit_date1: formData.animalMetadata.editDate1,
        edit_date2: formData.animalMetadata.editDate2,
        limit_inputs: formData.animalMetadata.limitInputs,
        carcass_scanner_no: formData.animalMetadata.carcassScannerNo,
        show_wool_fleece: formData.animalMetadata.showWoolFleece
      })
      .eq('animal_id', animalId)

    if (metadataError) {
      console.error(metadataError)
      return { error: 'Failed to update metadata' }
    }

    // Update animal_identification
    const { error: identificationError } = await supabase
      .from('animal_identification')
      .update({
        animal_ident: formData.animalIdentification.animalIdent,
        sire: formData.animalIdentification.sire,
        dam: formData.animalIdentification.dam,
        sex: formData.animalIdentification.sex,
        bt: formData.animalIdentification.bt,
        rt: formData.animalIdentification.rt,
        comment: formData.animalNotes.comment,
        status: formData.animalNotes.status
      })
      .eq('animal_id', animalId)

    if (identificationError) {
      console.error(identificationError)
      return { error: 'Failed to update identification' }
    }

    // Update animal_conception
    const { error: conceptionError } = await supabase
      .from('animal_conception')
      .update({
        method: formData.animalConception.method,
        date: formData.animalConception.date,
        lamb_ease: formData.animalConception.lambEase,
        nickname: formData.animalConception.nickname,
        group: formData.animalNotes.group
      })
      .eq('animal_id', animalId)

    if (conceptionError) {
      console.error(conceptionError)
      return { error: 'Failed to update conception data' }
    }

    // Transform generalTraits from nested format to flat database format
    const generalTraitsDbFormat = transformFormToDbTraits(formData.generalTraits, animalId);
    
    // Update general_traits table
    const { error: traitsError } = await supabase
      .from('general_traits')
      .upsert(generalTraitsDbFormat, {
        onConflict: 'animal_id',
        ignoreDuplicates: false
      });
    
    if (traitsError) {
      console.error('Error updating traits:', traitsError);
      return { error: traitsError.message };
    }

    // Revalidate the relevant paths
    revalidatePath('/dashboard');
    revalidatePath('/manage/animals');
    revalidatePath(`/manage/animals/${animalId}`);
    
    return { success: true }
  } catch (error) {
    console.error('Error in submitFormData:', error);
    return { error: 'Failed to submit animal data' };
  }
}

// Modified to accept an animal ID parameter
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

    // Build the base query
    const baseQuery = supabase
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
      .eq('farm_id', farmUser.farm_id);

    // If animalId is provided, fetch that specific animal
    // Otherwise, get the most recent animal
    let query = baseQuery;
    
    if (animalId) {
      query = query.eq('id', animalId);
    } else {
      query = query.order('created_at', { ascending: false }).limit(1);
    }
    
    const { data: animalData, error: animalError } = await query.single();

    if (animalError) {
      console.error('Error fetching animal:', animalError);
      return { error: animalError.message || 'Animal not found' };
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