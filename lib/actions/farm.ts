'use server';

import { createClient } from '@/lib/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function createFarm(formData: FormData) {
  const supabase = await createClient();
  
  // Get the authenticated user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { success: false, error: 'User not authenticated' };
  }
  
  // Create farm
  const farmName = formData.get('farm_name') as string;
  
  if (!farmName || farmName.trim() === '') {
    return { success: false, error: 'Farm name is required' };
  }

  // Start a transaction-like operation
  try {
    // 1. Create the farm record
    const { data: farm, error: farmError } = await supabase
      .from('farm')
      .insert({
        name: farmName.trim(),
        created_by: user.id
      })
      .select('id')
      .single();
      
    if (farmError) {
      console.error('Farm creation error:', farmError);
      return { success: false, error: 'Failed to create farm' };
    }
    
    // 2. Link user to farm as admin
    const { error: linkError } = await supabase
      .from('farm_users')
      .insert({
        farm_id: farm.id,
        user_id: user.id,
        role: 'admin'
      });
      
    if (linkError) {
      console.error('User-farm link error:', linkError);
      return { success: false, error: 'Failed to link user to farm' };
    }
    
    // 3. Create initial animal_records entry for this farm
    const { error: recordsError } = await supabase
      .from('animal_records')
      .insert({
        farm_id: farm.id
      });
    
    if (recordsError) {
      console.error('Animal records initialization error:', recordsError);
      // Non-critical error, can still proceed
    }
    
    // Success path
    revalidatePath('/dashboard');
    return { success: true, farmId: farm.id };
  } catch (err) {
    console.error('Unexpected error in farm creation:', err);
    return { success: false, error: 'An unexpected error occurred' };
  }
}