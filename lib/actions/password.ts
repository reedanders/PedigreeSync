'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/utils/supabase/server'

export async function requestPasswordReset(formData: FormData) {
  const supabase = await createClient()
  
  // Get email from form data
  const email = formData.get('email') as string
  
  if (!email || typeof email !== 'string') {
    return { error: 'Please enter a valid email address' }
  }
  
  // Send password reset email
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password`,
  })
  
  if (error) {
    console.error('Password reset error:', error)
    return { error: 'There was a problem sending the password reset link. Please try again.' }
  }
  
  return { success: true }
}

export async function resetPassword(formData: FormData) {
  const supabase = await createClient()
  
  // Get new password from form data
  const password = formData.get('password') as string
  
  if (!password || typeof password !== 'string' || password.length < 8) {
    return { error: 'Please enter a valid password (minimum 8 characters)' }
  }
  
  // Update the user's password
  const { error } = await supabase.auth.updateUser({
    password,
  })
  
  if (error) {
    console.error('Password update error:', error)
    return { error: 'There was a problem updating your password. Please try again.' }
  }
  
  // Password was updated successfully
  return { success: true }
}