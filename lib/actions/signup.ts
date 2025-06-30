'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  // Invite code validation
  const invite = formData.get('invite') as string
  const INVITE_CODE = process.env.NEXT_PUBLIC_INVITE_CODE
  if (!invite || invite !== INVITE_CODE) {
    return { error: 'Invalid invite code. Please contact the project team for access.' }
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/verification-required')
}