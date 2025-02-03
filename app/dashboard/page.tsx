'use client'

import { createContext, useContext, useState } from 'react';
import type { FormContextType, FormDataType } from '@/types/form';
import { AnimalIdInputs } from '@/components/AnimalIdInputs';
import { AnimalTraitsInputs } from '@/components/AnimalTraitsInputs';
import { submitFormData } from './actions';

export const FormContext = createContext<FormContextType | undefined>(undefined);

function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}

export default function DashboardPage() {
  const [formData, setFormData] = useState<FormDataType>({
    animalIdentification: {
      animalIdent: '',
      sire: '',
      dam: '',
      sex: 0,
      bt: 0,
      rt: 0
    },
    conception: '',
    animalTraits: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitFormData(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <main className="p-4 bg-gray-50 dark:bg-gray-900">
        <section className="h-full">
          <div className="grid grid-cols-1 gap-4">
            {/* Header Section */}
            <div className="bg-blue-300 dark:bg-blue-900 p-4 rounded text-gray-900 dark:text-gray-100">
              Database Filters
            </div>

            {/* Main Form Section */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md dark:shadow-gray-900">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Animal Identification Section */}
                <div className="order-1 lg:order-none bg-green-200 dark:bg-green-900/30 p-4 rounded lg:col-span-2 text-gray-900 dark:text-gray-100">
                  <AnimalIdInputs />
                </div>

                {/* Conception, Parturition Section */}
                <div className="order-2 lg:order-none bg-yellow-200 dark:bg-yellow-900/30 p-4 rounded text-gray-900 dark:text-gray-100">
                  Conception, Parturition
                </div>
              </div>

              {/* Group, Comments, Status Section */}
              <div className="order-3 lg:order-none mt-4 bg-red-200 dark:bg-red-900/30 p-4 rounded text-gray-900 dark:text-gray-100">
                Group, Comments, Status
              </div>

              {/* Animal Traits Section */}
              <div className="order-4 lg:order-none mt-4 bg-purple-200 dark:bg-purple-900/30 p-4 rounded text-gray-900 dark:text-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <AnimalTraitsInputs />
              </div>
            </div>

            {/* Footer Section */}
            <div className="order-last bg-purple-300 dark:bg-purple-900 p-4 rounded text-gray-900 dark:text-gray-100 flex justify-start">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Saving...' : 'Save Record'}
              </button>
            </div>
          </div>
        </section>
      </main>
    </FormContext.Provider>
  );
}