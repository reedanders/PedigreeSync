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
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1: Animal ID */}
        <div className="space-y-4">
          <div className="relative rounded-lg shadow-sm">
            <label 
              htmlFor="animalId"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Animal ID
            </label>
            <input
              id="animalId"
              type="text"
              value={formData.animalIdentification.animalIdent}
              onChange={(e) => updateField('animalIdent', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 sm:text-sm transition-colors duration-200"
              placeholder="Enter ID"
            />
          </div>

          {/* SVG Line Connectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path 
              d="M 33% 50% L 66% 40%" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              className="text-gray-300 dark:text-gray-600 opacity-70"
            />
            <path 
              d="M 33% 50% L 66% 60%" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              className="text-gray-300 dark:text-gray-600 opacity-70"
            />
          </svg>
        </div>

        {/* Column 2: Sire and Dam */}
        <div className="space-y-4">
          <div className="relative rounded-lg shadow-sm">
            <label 
              htmlFor="sire"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Sire
            </label>
            <input
              id="sire"
              type="text"
              value={formData.animalIdentification.sire}
              onChange={(e) => updateField('sire', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 sm:text-sm transition-colors duration-200"
              placeholder="Enter Sire ID"
            />
          </div>
          <div className="relative rounded-lg shadow-sm">
            <label 
              htmlFor="dam"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Dam
            </label>
            <input
              id="dam"
              type="text"
              value={formData.animalIdentification.dam}
              onChange={(e) => updateField('dam', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 sm:text-sm transition-colors duration-200"
              placeholder="Enter Dam ID"
            />
          </div>
        </div>

        {/* Column 3: Sex, Birth Type, Rear Type */}
        <div className="space-y-4">
          {/* Sex */}
          <div className="relative rounded-lg shadow-sm">
            <label 
              htmlFor="sex"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Sex
            </label>
            <select
              id="sex"
              value={formData.animalIdentification.sex}
              onChange={(e) => updateField('sex', Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 sm:text-sm transition-colors duration-200"
            >
              <option value={0}>Select Sex</option>
              <option value={1}>Male</option>
              <option value={2}>Female</option>
            </select>
          </div>

          {/* Birth Type */}
          <div className="relative rounded-lg shadow-sm">
            <label 
              htmlFor="birthType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Birth Type
            </label>
            <select
              id="birthType"
              value={formData.animalIdentification.bt}
              onChange={(e) => updateField('bt', Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 sm:text-sm transition-colors duration-200"
            >
              <option value={0}>Select Birth Type</option>
              <option value={1}>Single</option>
              <option value={2}>Twin</option>
              <option value={3}>Triplet</option>
            </select>
          </div>

          {/* Rear Type */}
          <div className="relative rounded-lg shadow-sm">
            <label 
              htmlFor="rearType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Rear Type
            </label>
            <select
              id="rearType"
              value={formData.animalIdentification.rt}
              onChange={(e) => updateField('rt', Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 sm:text-sm transition-colors duration-200"
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
