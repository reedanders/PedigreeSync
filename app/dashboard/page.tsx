'use client'

import { useState, useEffect } from 'react';
import { FormContext } from '@/contexts/FormContext';
import type { FormDataType } from '@/types/form';
import { AnimalMetadataInputs } from '@/components/AnimalMetadataInputs';
import { submitFormData, loadFormData } from './actions';

export default function DashboardPage() {
  const [formData, setFormData] = useState<FormDataType>({
    animalMetadata: {
      autoBuildText: '',
      editDate1: '',
      editDate2: '',
      limitInputs: 'None',
      carcassScannerNo: '',
      showWoolFleece: false,
    }
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

  useEffect(() => {
    async function init() {
      try {
        const { data, error } = await loadFormData();
        if (error) throw error;
        if (data) {
          console.log(data);
        }
      } catch (error) {
        console.log('Failed to load farm:', error);
      } 
    }
    init();
  }, [])

  const cardClass = "card bg-white dark:bg-gray-800 shadow-xl border dark:border-gray-700";
  const cardBodyClass = "card-body";
  const titleClass = "text-base font-medium text-gray-900 dark:text-gray-100";

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Database Filters */}
              <div className={`lg:col-span-full ${cardClass}`}>
                <div className={cardBodyClass}>
                  <h3 className={titleClass}>Database Filters</h3>
                  <AnimalMetadataInputs />
                </div>
              </div>

              {/* Animal Identification */}
              <div className={`lg:col-span-2 ${cardClass}`}>
                <div className={cardBodyClass}>
                  Animal Id Inputs
                </div>
              </div>

              {/* Conception */}
              <div className={cardClass}>
                <div className={cardBodyClass}>
                    Conception, Parturition
                </div>
              </div>
            </div>

            {/* Group Comments */}
            <div className={cardClass}>
              <div className={cardBodyClass}>
                  Group, Comments, Status
              </div>
            </div>

            {/* Animal Traits */}
            <div className={cardClass}>
              <div className={cardBodyClass}>
                Animal Traits Inputs
              </div>
            </div>

            {/* Footer */}
            <div className={cardClass}>
              <div className={`${cardBodyClass} flex justify-end`}>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  {isSubmitting ? 'Saving...' : 'Save Record'}
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </FormContext.Provider>
  );
}