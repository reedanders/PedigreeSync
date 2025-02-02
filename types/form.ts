import { Dispatch, SetStateAction } from 'react';

export interface AnimalIdentification {
  animalIdent: string;
  sire: string;
  dam: string;
  sex: number;
  bt: number;
  rt: number;
}

export interface FormDataType {
  animalIdentification: AnimalIdentification;
  conception: string;
  gridInput: any[]; // Consider defining a more specific type
}

export interface FormContextType {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
}