'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import type { FormDataType } from '@/types/form'

export async function submitFormData(formData: FormDataType) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('animal_records')
    .insert({})

  if (error) {
    console.error(error)
    redirect('/error')
  }

  revalidatePath('/dashboard')
  return { success: true }
}