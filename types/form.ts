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

export interface FormDataType {
  animalMetadata: AnimalMetadata;
  animalIdentification: AnimalIdentification;
  animalConception: AnimalConception;
}

export interface FormContextType {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  farmId?: string;
  animalId?: string;
}
