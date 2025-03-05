'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/utils/supabase/server'
import type { FormDataType } from '@/lib/types/form'
import { GeneralTraitsDbRecord, GeneralTraitsState } from '@/lib/types/form';

export async function submitFormData({ 
  formData, 
  animalId 
}: { 
  formData: FormDataType; 
  animalId: string; 
}) {
  const supabase = await createClient()

  // Update animal_metadata
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

  // Update animal_identification
  const { error: identificationError } = await supabase
    .from('animal_identification')
    .update({
      animal_ident: formData.animalIdentification.animalIdent,
      sire: formData.animalIdentification.sire,
      dam: formData.animalIdentification.dam,
      sex: formData.animalIdentification.sex,
      bt: formData.animalIdentification.bt,
      rt: formData.animalIdentification.rt,
      comment: formData.animalNotes.comment,
      status: formData.animalNotes.status
    })
    .eq('animal_id', animalId)

  if (identificationError) {
    console.error(identificationError)
    return { error: 'Failed to update identification' }
  }

  // Update animal_conception
  const { error: conceptionError } = await supabase
    .from('animal_conception')
    .update({
      method: formData.animalConception.method,
      date: formData.animalConception.date,
      lamb_ease: formData.animalConception.lambEase,
      nickname: formData.animalConception.nickname,
      group: formData.animalNotes.group
    })
    .eq('animal_id', animalId)

  if (conceptionError) {
    console.error(conceptionError)
    return { error: 'Failed to update conception data' }
  }

  // Transform generalTraits from nested format to flat database format
  const generalTraits = formData.generalTraits;
  const generalTraitsDbFormat = {
    // Birth traits
    birth_date: generalTraits.birth?.date || null,
    birth_weight: generalTraits.birth?.weight || null,
    birth_c_fat: generalTraits.birth?.cFat || null,
    birth_emd: generalTraits.birth?.emd || null,
    birth_sc: generalTraits.birth?.sc || null,
    birth_wec: generalTraits.birth?.wec || null,
    birth_group: generalTraits.birth?.group || null,
    
    // Weaning traits
    weaning_date: generalTraits.weaning?.date || null,
    weaning_weight: generalTraits.weaning?.weight || null,
    weaning_c_fat: generalTraits.weaning?.cFat || null,
    weaning_emd: generalTraits.weaning?.emd || null,
    weaning_sc: generalTraits.weaning?.sc || null,
    weaning_wec: generalTraits.weaning?.wec || null,
    weaning_group: generalTraits.weaning?.group || null,
    
    // EP Weaning traits
    ep_weaning_date: generalTraits.epWeaning?.date || null,
    ep_weaning_weight: generalTraits.epWeaning?.weight || null,
    ep_weaning_c_fat: generalTraits.epWeaning?.cFat || null,
    ep_weaning_emd: generalTraits.epWeaning?.emd || null,
    ep_weaning_sc: generalTraits.epWeaning?.sc || null,
    ep_weaning_wec: generalTraits.epWeaning?.wec || null,
    ep_weaning_group: generalTraits.epWeaning?.group || null,
    
    // P Weaning traits
    p_weaning_date: generalTraits.pWeaning?.date || null,
    p_weaning_weight: generalTraits.pWeaning?.weight || null,
    p_weaning_c_fat: generalTraits.pWeaning?.cFat || null,
    p_weaning_emd: generalTraits.pWeaning?.emd || null,
    p_weaning_sc: generalTraits.pWeaning?.sc || null,
    p_weaning_wec: generalTraits.pWeaning?.wec || null,
    p_weaning_group: generalTraits.pWeaning?.group || null,
    
    // Yearling traits
    yearling_date: generalTraits.yearling?.date || null,
    yearling_weight: generalTraits.yearling?.weight || null,
    yearling_c_fat: generalTraits.yearling?.cFat || null,
    yearling_emd: generalTraits.yearling?.emd || null,
    yearling_sc: generalTraits.yearling?.sc || null,
    yearling_wec: generalTraits.yearling?.wec || null,
    yearling_group: generalTraits.yearling?.group || null,
    
    // Hogget traits
    hogget_date: generalTraits.hogget?.date || null,
    hogget_weight: generalTraits.hogget?.weight || null,
    hogget_c_fat: generalTraits.hogget?.cFat || null,
    hogget_emd: generalTraits.hogget?.emd || null,
    hogget_sc: generalTraits.hogget?.sc || null,
    hogget_wec: generalTraits.hogget?.wec || null,
    hogget_group: generalTraits.hogget?.group || null,
    
    // Adult traits
    adult_date: generalTraits.adult?.date || null,
    adult_weight: generalTraits.adult?.weight || null,
    adult_c_fat: generalTraits.adult?.cFat || null,
    adult_emd: generalTraits.adult?.emd || null,
    adult_sc: generalTraits.adult?.sc || null,
    adult_wec: generalTraits.adult?.wec || null,
    adult_group: generalTraits.adult?.group || null,
    
    // Adult2-5 traits follow the same pattern
    adult2_date: generalTraits.adult2?.date || null,
    adult2_weight: generalTraits.adult2?.weight || null,
    adult2_c_fat: generalTraits.adult2?.cFat || null,
    adult2_emd: generalTraits.adult2?.emd || null,
    adult2_sc: generalTraits.adult2?.sc || null,
    adult2_wec: generalTraits.adult2?.wec || null,
    adult2_group: generalTraits.adult2?.group || null,
    
    adult3_date: generalTraits.adult3?.date || null,
    adult3_weight: generalTraits.adult3?.weight || null,
    adult3_c_fat: generalTraits.adult3?.cFat || null,
    adult3_emd: generalTraits.adult3?.emd || null,
    adult3_sc: generalTraits.adult3?.sc || null,
    adult3_wec: generalTraits.adult3?.wec || null,
    adult3_group: generalTraits.adult3?.group || null,
    
    adult4_date: generalTraits.adult4?.date || null,
    adult4_weight: generalTraits.adult4?.weight || null,
    adult4_c_fat: generalTraits.adult4?.cFat || null,
    adult4_emd: generalTraits.adult4?.emd || null,
    adult4_sc: generalTraits.adult4?.sc || null,
    adult4_wec: generalTraits.adult4?.wec || null,
    adult4_group: generalTraits.adult4?.group || null,
    
    adult5_date: generalTraits.adult5?.date || null,
    adult5_weight: generalTraits.adult5?.weight || null,
    adult5_c_fat: generalTraits.adult5?.cFat || null,
    adult5_emd: generalTraits.adult5?.emd || null,
    adult5_sc: generalTraits.adult5?.sc || null,
    adult5_wec: generalTraits.adult5?.wec || null,
    adult5_group: generalTraits.adult5?.group || null,
    
    // Link to animal record
    animal_id: animalId
  };
  
  // Update general_traits table
  const { error: traitsError } = await supabase
    .from('general_traits')
    .upsert(generalTraitsDbFormat, {
      onConflict: 'animal_id',
      ignoreDuplicates: false
    });
  
  if (traitsError) {
    console.error('Error updating traits:', traitsError);
    return { error: traitsError.message };
  }

  revalidatePath('/dashboard')
  return { success: true }
}

export async function loadFormData() {
  try {
    const supabase = await createClient()
    const { data: { user }} = await supabase.auth.getUser();
    if (!user) {
      return { error: 'User not authenticated' };
    }

    // Fetch animal records with all related tables in a single query
    const { data: animalData, error: animalError } = await supabase
      .from('animal_records')
      .select(`
        id,
        farm_id,
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
          rt,
          comment,
          status
        ),
        animal_conception (
          method,
          date,
          lamb_ease,
          nickname,
          group
        ),
        general_traits (
          birth_date, birth_weight, birth_c_fat, birth_emd, birth_sc, birth_wec, birth_group,
          weaning_date, weaning_weight, weaning_c_fat, weaning_emd, weaning_sc, weaning_wec, weaning_group,
          ep_weaning_date, ep_weaning_weight, ep_weaning_c_fat, ep_weaning_emd, ep_weaning_sc, ep_weaning_wec, ep_weaning_group,
          p_weaning_date, p_weaning_weight, p_weaning_c_fat, p_weaning_emd, p_weaning_sc, p_weaning_wec, p_weaning_group,
          yearling_date, yearling_weight, yearling_c_fat, yearling_emd, yearling_sc, yearling_wec, yearling_group,
          hogget_date, hogget_weight, hogget_c_fat, hogget_emd, hogget_sc, hogget_wec, hogget_group,
          adult_date, adult_weight, adult_c_fat, adult_emd, adult_sc, adult_wec, adult_group,
          adult2_date, adult2_weight, adult2_c_fat, adult2_emd, adult2_sc, adult2_wec, adult2_group,
          adult3_date, adult3_weight, adult3_c_fat, adult3_emd, adult3_sc, adult3_wec, adult3_group,
          adult4_date, adult4_weight, adult4_c_fat, adult4_emd, adult4_sc, adult4_wec, adult4_group,
          adult5_date, adult5_weight, adult5_c_fat, adult5_emd, adult5_sc, adult5_wec, adult5_group
        )
      `)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (animalError) {
      console.error('Error fetching animal:', animalError);
      return { error: animalError.message };
    }

    // Transform general_traits data into a better nested structure
    const traits = animalData.general_traits as GeneralTraitsDbRecord;
    const generalTraits: GeneralTraitsState = traits ? {
      birth: {
        date: traits.birth_date || null,
        weight: traits.birth_weight || null,
        cFat: traits.birth_c_fat || null,
        emd: traits.birth_emd || null,
        sc: traits.birth_sc || null,
        wec: traits.birth_wec || null,
        group: traits.birth_group || null
      },
      weaning: {
        date: traits.weaning_date || null,
        weight: traits.weaning_weight || null,
        cFat: traits.weaning_c_fat || null,
        emd: traits.weaning_emd || null,
        sc: traits.weaning_sc || null,
        wec: traits.weaning_wec || null,
        group: traits.weaning_group || null
      },
      epWeaning: {
        date: traits.ep_weaning_date || null,
        weight: traits.ep_weaning_weight || null,
        cFat: traits.ep_weaning_c_fat || null,
        emd: traits.ep_weaning_emd || null,
        sc: traits.ep_weaning_sc || null,
        wec: traits.ep_weaning_wec || null,
        group: traits.ep_weaning_group || null
      },
      pWeaning: {
        date: traits.p_weaning_date || null,
        weight: traits.p_weaning_weight || null,
        cFat: traits.p_weaning_c_fat || null,
        emd: traits.p_weaning_emd || null,
        sc: traits.p_weaning_sc || null,
        wec: traits.p_weaning_wec || null,
        group: traits.p_weaning_group || null
      },
      yearling: {
        date: traits.yearling_date || null,
        weight: traits.yearling_weight || null,
        cFat: traits.yearling_c_fat || null,
        emd: traits.yearling_emd || null,
        sc: traits.yearling_sc || null,
        wec: traits.yearling_wec || null,
        group: traits.yearling_group || null
      },
      hogget: {
        date: traits.hogget_date || null,
        weight: traits.hogget_weight || null,
        cFat: traits.hogget_c_fat || null,
        emd: traits.hogget_emd || null,
        sc: traits.hogget_sc || null,
        wec: traits.hogget_wec || null,
        group: traits.hogget_group || null
      },
      adult: {
        date: traits.adult_date || null,
        weight: traits.adult_weight || null,
        cFat: traits.adult_c_fat || null,
        emd: traits.adult_emd || null,
        sc: traits.adult_sc || null,
        wec: traits.adult_wec || null,
        group: traits.adult_group || null
      },
      adult2: {
        date: traits.adult2_date || null,
        weight: traits.adult2_weight || null,
        cFat: traits.adult2_c_fat || null,
        emd: traits.adult2_emd || null,
        sc: traits.adult2_sc || null,
        wec: traits.adult2_wec || null,
        group: traits.adult2_group || null
      },
      adult3: {
        date: traits.adult3_date || null,
        weight: traits.adult3_weight || null,
        cFat: traits.adult3_c_fat || null,
        emd: traits.adult3_emd || null,
        sc: traits.adult3_sc || null,
        wec: traits.adult3_wec || null,
        group: traits.adult3_group || null
      },
      adult4: {
        date: traits.adult4_date || null,
        weight: traits.adult4_weight || null,
        cFat: traits.adult4_c_fat || null,
        emd: traits.adult4_emd || null,
        sc: traits.adult4_sc || null,
        wec: traits.adult4_wec || null,
        group: traits.adult4_group || null
      },
      adult5: {
        date: traits.adult5_date || null,
        weight: traits.adult5_weight || null,
        cFat: traits.adult5_c_fat || null,
        emd: traits.adult5_emd || null,
        sc: traits.adult5_sc || null,
        wec: traits.adult5_wec || null,
        group: traits.adult5_group || null
      }
    } : {};

    return {
      data: {
        farmId: animalData.farm_id,
        animalId: animalData.id,
        animalMetadata: animalData.animal_metadata[0],
        animalIdentification: animalData.animal_identification[0],
        animalConception: animalData.animal_conception[0],
        generalTraits
      }
    };
  } catch (error) {
    console.error('Error in loadFormData:', error);
    return { error: 'Failed to load animal data' };
  }
}