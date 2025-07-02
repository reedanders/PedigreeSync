'use client'

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FormContext } from '@/lib/contexts/FormContext';
import type { FormDataType } from '@/lib/types/form';
import { submitFormData, loadFormData, deleteAnimal } from '@/lib/actions/animals';
import { AnimalInputsSkeleton } from '@/components/ui/Skeleton/AnimalInputsSkeleton';
import { AnimalHeader } from '@/components/animals/animalDetail/AnimalHeader';
import { DeleteSection } from '@/components/animals/animalDetail/DeleteSection';
import { DeleteConfirmationDialog } from '@/components/animals/animalDetail/DeleteConfirmationDialog';
import { ErrorCard } from '@/components/animals/animalDetail/ErrorCard';

export default function AnimalDetailPage() {
  // Get the animal ID from the URL parameter
  const params = useParams();
  const router = useRouter();
  const routeAnimalId = params.id as string;
  const isNewAnimal = routeAnimalId === 'new';
  
  const [formData, setFormData] = useState<FormDataType>({});
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
  const buttonPrimaryClass = "px-4 py-2.5 text-white bg-primary-600 hover:bg-primary-700 rounded-md font-medium transition-colors";
  const buttonSecondaryClass = "px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md font-medium transition-colors";

  // Container with rounded background
  const containerClass = "min-h-screen flex items-start justify-center";
  const backgroundClass = "w-full max-w-7xl";

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
          <ErrorCard error={error} cardClass={cardClass} cardBodyClass={cardBodyClass} />
        </div>
      </div>
    );
  }

  return (
    <FormContext.Provider value={{ formData, setFormData, farmId, animalId }}>
      <div className={containerClass}>
        <div className={backgroundClass}>
          <section className="space-y-6">
            <AnimalHeader
              isNewAnimal={isNewAnimal}
              animalId={animalId}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit}
              buttonPrimaryClass={buttonPrimaryClass}
              buttonSecondaryClass={buttonSecondaryClass}
            />
            {!isNewAnimal && (
              <DeleteSection onDeleteClick={handleDeleteClick} />
            )}
          </section>
        </div>
      </div>
      <DeleteConfirmationDialog
        open={showDeleteConfirm}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        isDeleting={isDeleting}
        cardClass={cardClass}
        cardBodyClass={cardBodyClass}
      />
    </FormContext.Provider>
  );
}