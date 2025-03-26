'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FormContext } from '@/lib/contexts/FormContext';
import type { FormDataType } from '@/lib/types/form';
import { AnimalMetadataInputs } from '@/components/animals/AnimalInputs/AnimalMetadataInputs';
import { AnimalIdInputs } from '@/components/animals/AnimalInputs/AnimalIdInputs';
import { AnimalConceptionInputs } from '@/components/animals/AnimalInputs/AnimalConceptionInputs';
import { AnimalNotesInputs } from '@/components/animals/AnimalInputs/AnimalNotesInputs';
import { GeneralTraitsInputs } from '@/components/animals/AnimalInputs/GeneralTraitsInputs';
import { submitFormData, loadFormData } from '@/lib/actions/animals';
import { AnimalInputsSkeleton } from '@/components/ui/Skeleton/AnimalInputsSkeleton';

export default function AnimalDetailPage() {
  // Get the animal ID from the URL parameter
  const params = useParams();
  const routeAnimalId = params.id as string;
  
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
      birth: {},
      weaning: {},
      epWeaning: {},
      pWeaning: {},
      yearling: {},
      hogget: {},
      adult: {},
      adult2: {},
      adult3: {},
      adult4: {},
      adult5: {}
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [farmId, setFarmId] = useState<string>('');
  const [animalId, setAnimalId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitFormData({ formData, animalId });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    async function init() {
      try {
        // Pass the URL parameter to loadFormData
        const { data, error } = await loadFormData(routeAnimalId);
        
        if (error) {
          setError(error);
          return;
        }
        
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
              status: data.animalIdentification?.status || 0
            },
            generalTraits: data.generalTraits || {
              birth: {},
              weaning: {},
              epWeaning: {},
              pWeaning: {},
              yearling: {},
              hogget: {},
              adult: {},
              adult2: {},
              adult3: {},
              adult4: {},
              adult5: {}
            }
          }));
        }
      } catch (error) {
        console.error('Failed to load animal:', error);
        setError('Failed to load animal data');
      } finally {
        setIsLoading(false);
      }
    }
    init();
  }, [routeAnimalId]);

  const cardClass = "bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700";
  const cardBodyClass = "p-5";
  const titleClass = "text-lg font-medium mb-4 text-gray-800 dark:text-white";
  const buttonPrimaryClass = "px-4 py-2.5 text-white bg-primary-600 hover:bg-primary-700 rounded-md font-medium transition-colors";
  const buttonSecondaryClass = "px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md font-medium transition-colors";

  // Container with rounded background
  const containerClass = "min-h-screen flex items-start justify-center px-4 py-6";
  const backgroundClass = "w-full max-w-7xl p-2";

  if (isLoading) {
    return (
      <div className={containerClass}>
        <div className={backgroundClass}>
          <AnimalInputsSkeleton 
            cardClass={cardClass} 
            cardBodyClass={cardBodyClass} 
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={containerClass}>
        <div className={backgroundClass}>
          <div className={cardClass}>
            <div className={cardBodyClass}>
              <div className="p-5 mb-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300">
                {error}
              </div>
              <div className="mt-6">
                <Link 
                  href="/manage/animals"
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center gap-2"
                >
                  <span>←</span> Back to animals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <FormContext.Provider value={{ formData, setFormData, farmId, animalId }}>
      <div className={containerClass}>
        <div className={backgroundClass}>
          <section className="space-y-6">
            {/* Header with back button */}
            <div className={cardClass}>
              <div className={`${cardBodyClass} flex justify-between items-center`}>
                <div>
                  <h1 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">
                    Animal: {formData.animalIdentification.animalIdent || 'Unknown'}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Edit animal details and traits
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="/manage/animals"
                    className={buttonSecondaryClass}
                  >
                    Back to List
                  </Link>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`${buttonPrimaryClass} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Saving...' : 'Save Record'}
                  </button>
                </div>
              </div>
            </div>
        
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Database Filters */}
              <div className={`lg:col-span-full ${cardClass}`}>
                <div className={cardBodyClass}>
                  <h2 className={titleClass}>Database Filters</h2>
                  <AnimalMetadataInputs />
                </div>
              </div>

              {/* Animal Identification */}
              <div className={`lg:col-span-2 ${cardClass}`}>
                <div className={cardBodyClass}>
                  <h2 className={titleClass}>Animal Identification</h2>
                  <AnimalIdInputs />
                </div>
              </div>

              {/* Conception */}
              <div className={cardClass}>
                <div className={cardBodyClass}>
                  <h2 className={titleClass}>Conception</h2>
                  <AnimalConceptionInputs />
                </div>
              </div>
            </div>

            {/* Group Comments */}
            <div className={cardClass}>
              <div className={cardBodyClass}>
                <h2 className={titleClass}>Group & Comments</h2>
                <AnimalNotesInputs />
              </div>
            </div>

            {/* Animal Traits */}
            <div className={cardClass}>
              <div className={cardBodyClass}>
                <h2 className={titleClass}>General Traits</h2>
                <GeneralTraitsInputs />
              </div>
            </div>
          </section>
        </div>
      </div>
    </FormContext.Provider>
  );
}