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

export interface AnimalMetadataForm {
  autoBuildText: string;
  editDate1: string | null;
  editDate2: string | null;
  // ...
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

export interface AnimalConceptionForm {
  method: number;
  date: string | null;
  // ...
}

export interface AnimalNotes {
  group: AnimalGroupType;
  comment: string;
  status: AnimalStatusType | string;
}

export interface RecordEvent {
  id?: string;
  animal_id?: string;
  event_type: string;
  event_date: string;
  measurement_type: string;
  value: number | string | null;
  created_at?: string;
  updated_at?: string;
}

export interface FormDataType {
  animalIdentification: AnimalIdentification;
  animalConception: AnimalConception;
  animalNotes: AnimalNotes;
  recordEvents?: RecordEvent[]; // <-- ensure this is present for state
}

export interface FormContextType {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  farmId?: string;
  animalId?: string;
  recordEvents?: RecordEvent[]; 
}
