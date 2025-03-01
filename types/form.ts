import { Dispatch, SetStateAction } from 'react';

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
  status: AnimalStatusType;
}

// Trait stages matching database column prefixes
export enum TraitStage {
  Birth = 'birth',
  Weaning = 'weaning',
  EPWeaning = 'ep_weaning',
  PWeaning = 'p_weaning',
  Yearling = 'yearling', 
  Hogget = 'hogget',
  Adult = 'adult',
  Adult2 = 'adult2',
  Adult3 = 'adult3',
  Adult4 = 'adult4',
  Adult5 = 'adult5'
}

// Display labels for trait stages
export const TRAIT_STAGE_LABELS: Record<TraitStage, string> = {
  [TraitStage.Birth]: 'Birth',
  [TraitStage.Weaning]: 'Weaning',
  [TraitStage.EPWeaning]: 'EP Weaning',
  [TraitStage.PWeaning]: 'P Weaning',
  [TraitStage.Yearling]: 'Yearling',
  [TraitStage.Hogget]: 'Hogget',
  [TraitStage.Adult]: 'Adult',
  [TraitStage.Adult2]: 'Adult 2',
  [TraitStage.Adult3]: 'Adult 3',
  [TraitStage.Adult4]: 'Adult 4',
  [TraitStage.Adult5]: 'Adult 5'
};

// Trait fields matching database column suffixes
export enum TraitField {
  Date = 'date',
  Weight = 'weight',
  CFat = 'c_fat',
  EMD = 'emd',
  SC = 'sc',
  WEC = 'wec',
  Group = 'group'
}

// Display labels for trait fields
export const TRAIT_FIELD_LABELS: Record<TraitField, string> = {
  [TraitField.Date]: 'Date',
  [TraitField.Weight]: 'Weight',
  [TraitField.CFat]: 'cFat',
  [TraitField.EMD]: 'EMD',
  [TraitField.SC]: 'SC',
  [TraitField.WEC]: 'WEC',
  [TraitField.Group]: 'Group'
};

export type RowLabel = keyof typeof TRAIT_STAGE_LABELS;
export type FieldName = keyof typeof TRAIT_FIELD_LABELS;

export interface GeneralTrait {
  [TraitField.Date]?: string;
  [TraitField.Weight]?: number;
  [TraitField.CFat]?: number;
  [TraitField.EMD]?: number;
  [TraitField.SC]?: number;
  [TraitField.WEC]?: number;
  [TraitField.Group]?: number;
}

export interface FormDataType {
  animalMetadata: AnimalMetadata;
  animalIdentification: AnimalIdentification;
  animalConception: AnimalConception;
  animalNotes: AnimalNotes;
  generalTraits: {
    [key in TraitStage]?: GeneralTrait;
  };
}

export interface FormContextType {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  farmId?: string;
  animalId?: string;
}
