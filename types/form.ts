import { Dispatch, SetStateAction } from 'react';

export type InputLimitationType = 'None' | 'Age' | 'Stage';

export interface AnimalMetadata {
  autoBuildText: string;
  editDate1: string;
  editDate2: string;
  limitInputs: InputLimitationType;
  carcassScannerNo: string;
  showWoolFleece: boolean;
}

export interface FormDataType {
  animalMetadata: AnimalMetadata;
}

export interface FormContextType {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
}
