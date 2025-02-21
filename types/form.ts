import { Dispatch, SetStateAction } from 'react';

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
  animalMetadata: AnimalMetadata;
}

export interface FormContextType {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
}
