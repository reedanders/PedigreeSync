'use client';

import { useContext } from 'react';
import { FormContext } from '../app/dashboard/page';
import type { FormContextType, FormDataType, AnimalIdentification } from '../types/form';

export function AnimalTraitsInputs() {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('AnimalTraitsInputs must be used within a FormProvider');
  }
  
  const { formData, setFormData } = context;

  const updateField = (field: keyof animalTraits, value: string | number) => {
    setFormData((prev: FormDataType) => ({
      ...prev,
      animalTraits: {
        ...prev.animalTraits,
        [field]: value
      }
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[300px]">
        Animal Traits
      </div>
    </div>
  );
}
