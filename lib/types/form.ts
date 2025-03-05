import { Dispatch, SetStateAction } from 'react';
import { StageKey, FieldKey } from '@/lib/config/traitsConfig';

export type InputLimitationType = 'None' | 'Age' | 'Stage';
export type SexType = 
  | 0  // None
  | 1  // Male
  | 2; // Female

export type BirthRearType = 
  | 0  // None
  | 1  // Single
  | 2  // Twin
  | 3; // Triplet

export type ConceptionMethod = 
  | 0  // Unknown
  | 1  // Natural
  | 2  // ET (Embryo Transfer)
  | 3  // AI (Artificial Insemination)
  | 4  // JiVET
  | 5  // MoET
  | 6; // Hand / Yard or Pen Mated

export type LambEase = 
  | 0  // Unobserved
  | 1  // No Assistance
  | 2  // Some Assistance
  | 3  // Hard Assistance
  | 4  // Abnormal Presentation
  | 5; // Other

export type AnimalGroupType = 
  | 0  // Unknown Group
  | 1  // Stud Drop
  | 2  // Stud Late
  | 3  // Stud Out of Season
  | 4  // Stud Early
  | 5  // Stud AI Group
  | 6; // Study ET Group

export type AnimalStatusType = 
  | 0  // Current
  | 1  // Culled
  | 2  // Dead
  | 3  // Missing
  | 4  // Reference
  | 5; // Sold

export interface AnimalMetadata {
  autoBuildText: string;
  editDate1: string;
  editDate2: string;
  limitInputs: InputLimitationType;
  carcassScannerNo: string;
  showWoolFleece: boolean;
}

export interface AnimalIdentification {
  animalIdent: string;
  sire: string;
  dam: string;
  sex: SexType;
  bt: BirthRearType;
  rt: BirthRearType;
}

export interface AnimalConception {
  method: ConceptionMethod;
  date: string;
  lambEase: LambEase;
  nickname: string;
}

export interface AnimalNotes {
  group: AnimalGroupType;
  comment: string;
  status: AnimalStatusType | string;
}

// Simplified trait type based on config keys
export type GeneralTraitRecord = {
  [key in FieldKey]?: string | number | null;
};

export type GeneralTraitsState = {
  [key in StageKey]?: GeneralTraitRecord;
};

// Keep database record type for API transformations
export interface GeneralTraitsDbRecord {
  // Birth traits
  birth_date?: string | null;
  birth_weight?: number | null;
  birth_c_fat?: number | null;
  birth_emd?: number | null;
  birth_sc?: number | null;
  birth_wec?: number | null;
  birth_group?: number | null;
  
  // Weaning traits
  weaning_date?: string | null;
  weaning_weight?: number | null;
  weaning_c_fat?: number | null;
  weaning_emd?: number | null;
  weaning_sc?: number | null;
  weaning_wec?: number | null;
  weaning_group?: number | null;
  
  // EP Weaning traits
  ep_weaning_date?: string | null;
  ep_weaning_weight?: number | null;
  ep_weaning_c_fat?: number | null;
  ep_weaning_emd?: number | null;
  ep_weaning_sc?: number | null;
  ep_weaning_wec?: number | null;
  ep_weaning_group?: number | null;
  
  // P Weaning traits
  p_weaning_date?: string | null;
  p_weaning_weight?: number | null;
  p_weaning_c_fat?: number | null;
  p_weaning_emd?: number | null;
  p_weaning_sc?: number | null;
  p_weaning_wec?: number | null;
  p_weaning_group?: number | null;
  
  // Yearling traits
  yearling_date?: string | null;
  yearling_weight?: number | null;
  yearling_c_fat?: number | null;
  yearling_emd?: number | null;
  yearling_sc?: number | null;
  yearling_wec?: number | null;
  yearling_group?: number | null;
  
  // Hogget traits
  hogget_date?: string | null;
  hogget_weight?: number | null;
  hogget_c_fat?: number | null;
  hogget_emd?: number | null;
  hogget_sc?: number | null;
  hogget_wec?: number | null;
  hogget_group?: number | null;
  
  // Adult traits
  adult_date?: string | null;
  adult_weight?: number | null;
  adult_c_fat?: number | null;
  adult_emd?: number | null;
  adult_sc?: number | null;
  adult_wec?: number | null;
  adult_group?: number | null;
  
  // Adult2 traits
  adult2_date?: string | null;
  adult2_weight?: number | null;
  adult2_c_fat?: number | null;
  adult2_emd?: number | null;
  adult2_sc?: number | null;
  adult2_wec?: number | null;
  adult2_group?: number | null;
  
  // Adult3 traits
  adult3_date?: string | null;
  adult3_weight?: number | null;
  adult3_c_fat?: number | null;
  adult3_emd?: number | null;
  adult3_sc?: number | null;
  adult3_wec?: number | null;
  adult3_group?: number | null;
  
  // Adult4 traits
  adult4_date?: string | null;
  adult4_weight?: number | null;
  adult4_c_fat?: number | null;
  adult4_emd?: number | null;
  adult4_sc?: number | null;
  adult4_wec?: number | null;
  adult4_group?: number | null;
  
  // Adult5 traits
  adult5_date?: string | null;
  adult5_weight?: number | null;
  adult5_c_fat?: number | null;
  adult5_emd?: number | null;
  adult5_sc?: number | null;
  adult5_wec?: number | null;
  adult5_group?: number | null;
}

// Update FormDataType to include farmId and animalId
export interface FormDataType {
  animalMetadata: AnimalMetadata;
  animalIdentification: AnimalIdentification;
  animalConception: AnimalConception;
  animalNotes: AnimalNotes;
  generalTraits: GeneralTraitsState;
}

export interface FormContextType {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  farmId?: string;
  animalId?: string;
}
