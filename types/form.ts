import { Dispatch, SetStateAction } from 'react';

export interface AnimalIdentification {
  animalIdent: string;
  sire: string;
  dam: string;
  sex: number;
  bt: number;
  rt: number;
}

export interface AnimalTrait {
  id: number;
  value: number;
  name: string;
}

export interface FormDataType {
  animalIdentification: AnimalIdentification;
  conception: string;
  animalTraits: AnimalTrait[];
}

export interface FormContextType {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
}