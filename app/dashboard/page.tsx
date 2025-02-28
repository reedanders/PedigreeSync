'use client'

import { useState, useEffect } from 'react';
import { FormContext } from '@/contexts/FormContext';
import type { FormDataType } from '@/types/form';
import { AnimalMetadataInputs } from '@/components/AnimalMetadataInputs';
import { AnimalIdInputs } from '@/components/AnimalIdInputs';
import { AnimalConceptionInputs } from '@/components/AnimalConceptionInputs';
import { AnimalNotesInputs } from '@/components/AnimalNotesInputs';
import { GeneralTraitsInputs } from '@/components/GeneralTraitsInputs';
import { submitFormData, loadFormData } from './actions';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';

export default function DashboardPage() {
  const [formData, setFormData] = useState<FormDataType>({
    animalMetadata: {
      autoBuildText: '',
      editDate1: '',
      editDate2: '',
      limitInputs: 'None',
      carcassScannerNo: '',
      showWoolFleece: false,
    },
    animalIdentification: {
      animalIdent: '',
      sire: '',
      dam: '',
      sex: 0,
      bt: 0,
      rt: 0
    },
    animalConception: {
      method: 0,
      date: '',
      lambEase: 0,
      nickname: ''
    },
    animalNotes: {
      group: 0,
      comment: '',
      status: 0
    },
    generalTraits: {
      Birth: {},
      Weaning: {},
      "EP Weaning": {},
      "P Weaning": {},
      Yearling: {},
      Hogget: {},
      Adult: {},
      "Adult 3": {},
      "Adult 4": {},
      "Adult 5": {}
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [farmId, setFarmId] = useState<string>('');
  const [animalId, setAnimalId] = useState<string>('');

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitFormData({ formData, animalId });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {console.log(formData)}, [formData]);

  useEffect(() => {
    async function init() {
      try {
        const { data, error } = await loadFormData();
        
        if (error) throw error;
        if (data) {
          setFarmId(data.farmId);
          setAnimalId(data.animalId);
          setFormData(prev => ({
            ...prev,
            animalMetadata: {
              autoBuildText: data.animalMetadata?.auto_build_text || '',
              editDate1: data.animalMetadata?.edit_date1 || '',
              editDate2: data.animalMetadata?.edit_date2 || '',
              limitInputs: data.animalMetadata?.limit_inputs || 'None',
              carcassScannerNo: data.animalMetadata?.carcass_scanner_no || '',
              showWoolFleece: data.animalMetadata?.show_wool_fleece || false,
            },
            animalIdentification: {
              animalIdent: data.animalIdentification?.animal_ident || '',
              sire: data.animalIdentification?.sire || '',
              dam: data.animalIdentification?.dam || '',
              sex: data.animalIdentification?.sex || 0,
              bt: data.animalIdentification?.bt || 0,
              rt: data.animalIdentification?.rt || 0
            },
            animalConception: {
              method: data.animalConception?.method || 0,
              date: data.animalConception?.date || '',
              lambEase: data.animalConception?.lamb_ease || 0,
              nickname: data.animalConception?.nickname || ''
            },
            animalNotes: {
              group: data.animalConception?.group || 0,
              comment: data.animalIdentification?.comment || '',
              status: data.animalIdentification?.status || 'Current'
            },
            generalTraits: data.generalTraits || {
              Birth: {},
              Weaning: {},
              "EP Weaning": {},
              "P Weaning": {},
              Yearling: {},
              Hogget: {},
              Adult: {},
              "Adult 3": {},
              "Adult 4": {},
              "Adult 5": {}
            }
          }));
        }
      } catch (error) {
        console.error('Failed to load farm:', error);
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, []);

  const cardClass = "card bg-white dark:bg-gray-800 shadow-xl border dark:border-gray-700";
  const cardBodyClass = "card-body";
  const titleClass = "text-base font-medium text-gray-900 dark:text-gray-100";

  if (isLoading) {
    return <LoadingSkeleton 
      cardClass={cardClass} 
      cardBodyClass={cardBodyClass} 
    />;
  }

  return (
    <FormContext.Provider value={{ formData, setFormData, farmId, animalId }}>
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
                  <AnimalIdInputs />
                </div>
              </div>

              {/* Conception */}
              <div className={cardClass}>
                <div className={cardBodyClass}>
                    <AnimalConceptionInputs />
                </div>
              </div>
            </div>

            {/* Group Comments */}
            <div className={cardClass}>
              <div className={cardBodyClass}>
                  <AnimalNotesInputs />
              </div>
            </div>

            {/* Animal Traits */}
            <div className={cardClass}>
              <div className={cardBodyClass}>
                <GeneralTraitsInputs />
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