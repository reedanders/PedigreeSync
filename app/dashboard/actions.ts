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

export async function loadFormData() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Not authenticated' }

  const { data: farmUser, error: farmError } = await supabase
    .from('farm_users')
    .select(`
      farm (
        id,
        name
      )
    `)
    .eq('user_id', user.id)
    .single()

  if (farmError) {
    console.error('Error fetching farm:', farmError)
    return { error: 'Failed to load farm data' }
  }

  return { data: farmUser.farm[0].name }
}