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
    
    // Success path
    revalidatePath('/dashboard');
    return { success: true, farmId: farm.id };
  } catch (err) {
    console.error('Unexpected error in farm creation:', err);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

export async function getFarmDetails() {
  const supabase = await createClient();
  
  // Get the authenticated user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return null;
  }
  
  // Get the user's primary farm
  const { data: farmUser, error: farmUserError } = await supabase
    .from('farm_users')
    .select('farm_id')
    .eq('user_id', user.id)
    .limit(1)
    .single();
  
  if (farmUserError || !farmUser) {
    return null;
  }
  
  // Get the farm details
  const { data: farm, error: farmError } = await supabase
    .from('farm')
    .select('id, name')
    .eq('id', farmUser.farm_id)
    .single();
  
  if (farmError || !farm) {
    return null;
  }
  
  return farm;
}