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
