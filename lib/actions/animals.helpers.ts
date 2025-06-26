import { createClient } from '@/lib/utils/supabase/server'

/**
 * Gets the current user's farm information
 */
export async function getUserFarm() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { error: 'User not authenticated' };
    }

    // Get the user's primary farm
    const { data: farmUser, error: farmUserError } = await supabase
      .from('farm_users')
      .select('farm_id')
      .eq('user_id', user.id)
      .limit(1)
      .single();

    if (farmUserError || !farmUser) {
      return { error: 'No farm found for user' };
    }

    return { data: farmUser };
  } catch (error) {
    console.error('Error getting user farm:', error);
    return { error: 'Failed to get farm information' };
  }
}