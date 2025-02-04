'use client';

import { useContext } from 'react';
import { FormContext } from '../app/dashboard/page';
import type { FormContextType, FormDataType, AnimalIdentification } from '../types/form';

export function AnimalIdInputs() {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('AnimalIdInputs must be used within a FormProvider');
  }
  
  const { formData, setFormData } = context;

  const updateField = (field: keyof AnimalIdentification, value: string | number) => {
    setFormData((prev: FormDataType) => ({
      ...prev,
      animalIdentification: {
        ...prev.animalIdentification,
        [field]: value
      }
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[300px]">
        {/* Column 1: Animal ID */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Animal ID
            </label>
            <input
              type="text"
              value={formData.animalIdentification.animalIdent}
              onChange={(e) => updateField('animalIdent', e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* Column 2: Sire and Dam */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Sire
            </label>
            <input
              type="text"
              value={formData.animalIdentification.sire}
              onChange={(e) => updateField('sire', e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Dam
            </label>
            <input
              type="text"
              value={formData.animalIdentification.dam}
              onChange={(e) => updateField('dam', e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* Column 3: Sex, Birth Type, Rear Type */}
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Sex
            </label>
            <select
              value={formData.animalIdentification.sex}
              onChange={(e) => updateField('sex', Number(e.target.value))}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value={0}>Select Sex</option>
              <option value={1}>Male</option>
              <option value={2}>Female</option>
            </select>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Birth Type
            </label>
            <select
              value={formData.animalIdentification.bt}
              onChange={(e) => updateField('bt', Number(e.target.value))}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value={0}>Select Birth Type</option>
              <option value={1}>Single</option>
              <option value={2}>Twin</option>
              <option value={3}>Triplet</option>
            </select>
          </div>

          <div className="w-full flex flex-col gap-2">
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Rear Type
            </label>
            <select
              value={formData.animalIdentification.rt}
              onChange={(e) => updateField('rt', Number(e.target.value))}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value={0}>Select Rear Type</option>
              <option value={1}>Single</option>
              <option value={2}>Twin</option>
              <option value={3}>Triplet</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
