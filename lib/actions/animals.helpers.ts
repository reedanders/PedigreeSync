import { createClient } from '@/lib/utils/supabase/server'
import { GeneralTraitsDbRecord, GeneralTraitsState } from '@/lib/types/form';

/**
 * Transforms form data traits to database format
 */
export function transformFormToDbTraits(generalTraits: GeneralTraitsState, animalId: string) {
  return {
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
}

/**
 * Transforms database traits to form data format
 */
export function transformDbToFormTraits(traits: GeneralTraitsDbRecord): GeneralTraitsState {
  if (!traits) return {};
  
  return {
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
  };
}

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