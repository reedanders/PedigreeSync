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

export type InputLimitationType = 'None' | 'Age' | 'Stage';

export interface AnimalMetadata {
  breed: string;
  flock: string;
  birthDate: string;
  managementGroup: string;
  location: string;
  autoBuildText: string;
  editDate1: string;
  editDate2: string;
  limitInputs: InputLimitationType;
  carcassScannerNo: string;
  showWoolFleece: boolean;
  functionKey: string;
}

export interface FormDataType {
  animalIdentification: {
    animalIdent: string;
    sire: string;
    dam: string;
    sex: number;
    bt: number;
    rt: number;
  };
  conception: string;
  animalTraits: AnimalTrait[]; // A list of traits
  animalMetadata: AnimalMetadata;
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
  | 'Group'
  | 'Fleece Date'
  | 'GFW'
  | 'CFW'
  | 'FD'
  | 'FD Cv'
  | 'Yield'
  | 'SL'
  | 'SS'
  | 'Curv';

export interface ColumnConfig {
  label: FieldName;
  type: 'date' | 'number' | 'select';
  options?: string[];
  placeholder?: string;
}

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
  [key: string]: boolean;
}

export type VisibilityConfig = {
  [key in RowLabel]: VisibilitySettings;
}
