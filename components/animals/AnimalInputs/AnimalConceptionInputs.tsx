'use client';

import { useContext } from 'react';
import { FormContext } from '@/lib/contexts/FormContext';
import type { FormDataType, AnimalConception } from '@/lib/types/form';
import { formatDateForInput } from '@/lib/utils/date';

export function AnimalConceptionInputs() {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('AnimalConceptionInputs must be used within a FormProvider');
  }
  
  const { formData, setFormData } = context;

  const updateField = (field: keyof AnimalConception, value: string | number) => {
    setFormData((prev: FormDataType) => ({
      ...prev,
      animalConception: {
        ...prev.animalConception,
        [field]: value
      }
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Conception Method */}
      <div className="relative">
        <label 
          htmlFor="conceptionMethod"
          className="block text-sm font-medium text-gray-900 dark:text-base-content"
        >
          Conception Method
        </label>
        <select
          id="conceptionMethod"
          value={formData.animalConception.method}
          onChange={(e) => updateField('method', Number(e.target.value))}
          className="select select-bordered select-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
        >
          <option value={0}>Unknown</option>
          <option value={1}>Natural</option>
          <option value={2}>ET</option>
          <option value={3}>AI</option>
          <option value={4}>JiVET</option>
          <option value={5}>MoET</option>
          <option value={6}>Hand / Yard or Pen Mated</option>
        </select>
      </div>

      {/* Conception Date */}
      <div className="relative">
        <label 
          htmlFor="conceptionDate"
          className="block text-sm font-medium text-gray-900 dark:text-base-content"
        >
          Conception Date
        </label>
        <input
          id="conceptionDate"
          type="date"
          value={formatDateForInput(formData.animalConception.date)}
          onChange={(e) => updateField('date', e.target.value)}
          className="input input-bordered input-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
        />
      </div>

      {/* Lamb Ease */}
      <div className="relative">
        <label 
          htmlFor="lambEase"
          className="block text-sm font-medium text-gray-900 dark:text-base-content"
        >
          Lamb Ease
        </label>
        <select
          id="lambEase"
          value={formData.animalConception.lambEase}
          onChange={(e) => updateField('lambEase', Number(e.target.value))}
          className="select select-bordered select-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
        >
          <option value={0}>Unobserved</option>
          <option value={1}>No Assistance</option>
          <option value={2}>Some Assistance</option>
          <option value={3}>Hard Assistance</option>
          <option value={4}>Abnormal Presentation</option>
          <option value={5}>Other</option>
        </select>
      </div>

      {/* Nickname */}
      <div className="relative">
        <label 
          htmlFor="nickname"
          className="block text-sm font-medium text-gray-900 dark:text-base-content"
        >
          Nickname
        </label>
        <input
          id="nickname"
          type="text"
          value={formData.animalConception.nickname}
          onChange={(e) => updateField('nickname', e.target.value)}
          placeholder="Enter nickname"
          className="input input-bordered input-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
        />
      </div>
    </div>
  );
}
