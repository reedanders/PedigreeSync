'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import type { FormDataType } from '@/types/form'

export async function submitFormData(formData: FormDataType) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('animal_records')
    .insert({
      animal_id: formData.animalIdentification.animalIdent,
      sire: formData.animalIdentification.sire,
      dam: formData.animalIdentification.dam,
      sex: formData.animalIdentification.sex,
      birth_type: formData.animalIdentification.bt,
      rear_type: formData.animalIdentification.rt,
      conception_data: formData.conception,
      grid_data: formData.gridInput
    })

  if (error) {
    console.error(error)
    redirect('/error')
  }

  revalidatePath('/dashboard')
  return { success: true }
}