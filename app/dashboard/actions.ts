'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import type { FormDataType } from '@/types/form'

export async function submitFormData({ 
  formData, 
  animalId 
}: { 
  formData: FormDataType; 
  animalId: string; 
}) {
  const supabase = await createClient()

  const { error: metadataError } = await supabase
    .from('animal_metadata')
    .update({
      auto_build_text: formData.animalMetadata.autoBuildText,
      edit_date1: formData.animalMetadata.editDate1,
      edit_date2: formData.animalMetadata.editDate2,
      limit_inputs: formData.animalMetadata.limitInputs,
      carcass_scanner_no: formData.animalMetadata.carcassScannerNo,
      show_wool_fleece: formData.animalMetadata.showWoolFleece
    })
    .eq('animal_id', animalId)

  if (metadataError) {
    console.error(metadataError)
    return { error: 'Failed to update metadata' }
  }

  // Update animal identification
  const { error: identificationError } = await supabase
    .from('animal_identification')
    .update({
      animal_ident: formData.animalIdentification.animalIdent,
      sire: formData.animalIdentification.sire,
      dam: formData.animalIdentification.dam,
      sex: formData.animalIdentification.sex,
      bt: formData.animalIdentification.bt,
      rt: formData.animalIdentification.rt
    })
    .eq('animal_id', animalId)

  if (identificationError) {
    console.error(identificationError)
    return { error: 'Failed to update identification' }
  }

  // Update animal conception
  const { error: conceptionError } = await supabase
    .from('animal_conception')
    .update({
      method: formData.animalConception.method,
      date: formData.animalConception.date,
      lamb_ease: formData.animalConception.lambEase,
      nickname: formData.animalConception.nickname
    })
    .eq('animal_id', animalId)

  if (conceptionError) {
    console.error(conceptionError)
    return { error: 'Failed to update conception data' }
  }

  revalidatePath('/dashboard')
  return { success: true }
}

export async function loadFormData() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Not authenticated' }

  // Get farm info
  const { data: farmData, error: farmError } = await supabase
    .from('farm_users')
    .select(`
      farm_id,
      farm:farm(name)
    `)
    .eq('user_id', user.id)
    .single()

  if (farmError) {
    console.error('Error fetching farm:', farmError)
    return { error: 'Failed to load farm data' }
  }

  // Get latest animal record 
  const { data: animalData, error: animalError } = await supabase
    .from('animal_records')
    .select(`
      id,
      created_at,
      animal_metadata (
        auto_build_text,
        edit_date1,
        edit_date2,
        limit_inputs,
        carcass_scanner_no,
        show_wool_fleece
      ),
      animal_identification (
        animal_ident,
        sire,
        dam,
        sex,
        bt,
        rt
      ),
      animal_conception (
        method,
        date,
        lamb_ease,
        nickname
      )
    `)
    .eq('farm_id', farmData.farm_id)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (animalError) {
    console.error('Error fetching animal:', animalError)
    return { error: 'Failed to load animal data' }
  }
  
  return { 
    data: {
      farmId: farmData.farm_id,
      animalId: animalData.id,
      animalMetadata: animalData.animal_metadata[0],
      animalIdentification: animalData.animal_identification[0],
      animalConception: animalData.animal_conception[0]
    }
  }
}