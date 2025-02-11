'use client'

import { useState } from 'react';
import { FormContext } from '@/contexts/FormContext';
import type { FormDataType } from '@/types/form';
import { AnimalIdInputs } from '@/components/AnimalIdInputs';
import { AnimalTraitsInputs } from '@/components/AnimalTraitsInputs';
import { submitFormData } from './actions';

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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="space-y-6">
            {/* Header Section */}
            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Database Filters</h2>
            </div>

            {/* Main Form Section */}
            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Animal Identification Section */}
                  <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                    <AnimalIdInputs />
                  </div>

                  {/* Conception, Parturition Section */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                    <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                      Conception, Parturition
                    </h3>
                  </div>
                </div>
              </div>

              {/* Group, Comments, Status Section */}
              <div className="p-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-100">
                    Group, Comments, Status
                  </h3>
                </div>
              </div>

              {/* Animal Traits Section */}
              <div className="p-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 transition-shadow duration-200 hover:shadow-md">
                  <AnimalTraitsInputs />
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="flex justify-end px-6 py-4 bg-white dark:bg-gray-800 shadow-sm rounded-lg">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Saving...' : 'Save Record'}
              </button>
            </div>
          </section>
        </div>
      </main>
    </FormContext.Provider>
  );
}