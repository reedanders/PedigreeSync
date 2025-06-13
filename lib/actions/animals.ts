'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/utils/supabase/server'
import type { FormDataType } from '@/lib/types/form'
import { 
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
          recordEvents: []
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
    }

    return {
      data: {
        farmId: animalData.farm_id,
        animalId: animalData.id,
        animalIdentification: animalData.animal_identification[0],
        animalConception: animalData.animal_conception[0],
        recordEvents // Add record events to the response
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