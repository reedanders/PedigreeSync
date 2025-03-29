'use client'

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FormContext } from '@/lib/contexts/FormContext';
import type { FormDataType } from '@/lib/types/form';
import { AnimalMetadataInputs } from '@/components/animals/AnimalInputs/AnimalMetadataInputs';
import { AnimalIdInputs } from '@/components/animals/AnimalInputs/AnimalIdInputs';
import { AnimalConceptionInputs } from '@/components/animals/AnimalInputs/AnimalConceptionInputs';
import { AnimalNotesInputs } from '@/components/animals/AnimalInputs/AnimalNotesInputs';
import { GeneralTraitsInputs } from '@/components/animals/AnimalInputs/GeneralTraitsInputs';
import { submitFormData, loadFormData, deleteAnimal } from '@/lib/actions/animals';
import { AnimalInputsSkeleton } from '@/components/ui/Skeleton/AnimalInputsSkeleton';

export default function AnimalDetailPage() {
  // Get the animal ID from the URL parameter
  const params = useParams();
  const router = useRouter();
  const routeAnimalId = params.id as string;
  const isNewAnimal = routeAnimalId === 'new';
  
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
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [farmId, setFarmId] = useState<string>('');
  const [animalId, setAnimalId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await submitFormData({ formData, animalId });
      
      if (result.error) {
        setError(result.error);
      } else if (isNewAnimal && result.animalId) {
        // Redirect to the edit page for the newly created animal
        router.push(`/manage/animals/${result.animalId}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };
  
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };
  
  const handleConfirmDelete = async () => {
    if (isNewAnimal) return;
    
    setIsDeleting(true);
    try {
      const result = await deleteAnimal(animalId);
      
      if (result.error) {
        setError(result.error);
        setShowDeleteConfirm(false);
      } else {
        // Redirect to animals list on successful delete
        router.push('/manage/animals');
      }
    } finally {
      setIsDeleting(false);
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
  const backgroundClass = "w-full max-w-7xl bg-gray-100 dark:bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8";

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

  // Delete confirmation modal
  const DeleteConfirmationDialog = () => {
    if (!showDeleteConfirm) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className={`${cardClass} w-full max-w-md mx-4`}>
          <div className={cardBodyClass}>
            <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-white">
              Delete Animal
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Are you sure you want to delete {formData.animalIdentification.animalIdent || 'this animal'}? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancelDelete}
                disabled={isDeleting}
                className={buttonSecondaryClass}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="px-4 py-2.5 text-white bg-red-600 hover:bg-red-700 rounded-md font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
                    {isNewAnimal 
                      ? 'Add New Animal' 
                      : `Animal: ${formData.animalIdentification.animalIdent || 'Unknown'}`}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {isNewAnimal 
                      ? 'Create a new animal record' 
                      : `Edit animal details and traits`}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="/manage/animals"
                    className={buttonSecondaryClass}
                  >
                    Back to List
                  </Link>
                  
                  {/* Only show delete button for existing animals */}
                  {!isNewAnimal && (
                    <button
                      onClick={handleDeleteClick}
                      className="px-4 py-2.5 text-white bg-red-600 hover:bg-red-700 rounded-md font-medium transition-colors"
                    >
                      Delete
                    </button>
                  )}
                  
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`${buttonPrimaryClass} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting 
                      ? 'Saving...' 
                      : isNewAnimal 
                        ? 'Create Animal' 
                        : 'Save Changes'}
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
      
      {/* Render the delete confirmation dialog */}
      <DeleteConfirmationDialog />
    </FormContext.Provider>
  );
}