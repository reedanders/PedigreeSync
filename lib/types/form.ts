import { Dispatch, SetStateAction } from 'react';

// Update FormDataType to include farmId and animalId
export interface FormDataType {}

export interface FormContextType {
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  farmId?: string;
  animalId?: string;
}
