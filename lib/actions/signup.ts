'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/utils/supabase/server'

// Updated to return errors instead of using URL parameters
export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  // Return error instead of redirecting with URL parameters
  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  
  // Redirect to verification page on success
  redirect('/verification-required')
}