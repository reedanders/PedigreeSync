import { Dispatch, SetStateAction } from 'react';

export interface AnimalIdentification {
  animalIdent: string;
  sire: string;
  dam: string;
  sex: number;
  bt: number;
  rt: number;
}

export interface GeneralTrait {
  date: string;
  weight?: number;
  cFat?: number;
  emd?: number;
  sc?: number;
  wec?: number;
  group?: number;
}

export interface FleeceTrait {
  fleeceDate: string;
  gfw?: number;
  cfw?: number;
  fd?: number;
  fdCv?: number;
  yield?: number;
  sl?: number;
  ss?: number;
  curv?: number;
}

export interface AnimalTrait {
  general: GeneralTrait; // Age-related metrics
  fleece: FleeceTrait; // Wool-related metrics
}

export interface FormDataType {
  animalIdentification: AnimalIdentification;
  conception: string;
  animalTraits: AnimalTrait[]; // A list of traits
}

export interface FormContextType {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
}

export type FieldName = 
  | 'Date'
  | 'Weight'
  | 'cFat'
  | 'EMD'
  | 'SC'
  | 'WEC'
  | 'Group';

export type RowLabel = 
  | 'Birth'
  | 'Weaning'
  | 'EP Weaning'
  | 'P Weaning'
  | 'Yearling'
  | 'Hogget'
  | 'Adult'
  | 'Adult 3'
  | 'Adult 4'
  | 'Adult 5';

export interface VisibilitySettings {
  [key in FieldName]: boolean;
}

export type VisibilityConfig = {
  [key in RowLabel]: VisibilitySettings;
}
