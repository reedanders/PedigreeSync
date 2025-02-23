import { Dispatch, SetStateAction } from 'react';

export type InputLimitationType = 'None' | 'Age' | 'Stage';
export type SexType = 0 | 1 | 2; // 0: None, 1: Male, 2: Female
export type BirthRearType = 0 | 1 | 2 | 3; // 0: None, 1: Single, 2: Twin, 3: Triplet

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

export interface FormDataType {
  animalMetadata: AnimalMetadata;
  animalIdentification: AnimalIdentification;
}

export interface FormContextType {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  farmId?: string;
  animalId?: string;
}
