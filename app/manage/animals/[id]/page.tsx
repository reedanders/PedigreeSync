'use client'

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import type { FormDataType } from '@/lib/types/form';
import { submitFormData, loadFormData, deleteAnimal } from '@/lib/actions/animals';
import { AnimalInputsSkeleton } from '@/components/ui/Skeleton/AnimalInputsSkeleton';
import { ErrorCard } from '@/components/animals/animalDetail/ErrorCard';
import { AnimalDetailView } from '@/components/animals/animalDetail/AnimalDetailView';

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

  // Container with rounded background
  const containerClass = "min-h-screen flex items-start justify-center";
  const backgroundClass = "w-full max-w-7xl";

  if (isLoading) {
    return (
      <div className={containerClass}>
        <div className={backgroundClass}>
          <AnimalInputsSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={containerClass}>
        <div className={backgroundClass}>
          <ErrorCard error={error} />
        </div>
      </div>
    );
  }

  return (
      <AnimalDetailView
        containerClass={containerClass}
        backgroundClass={backgroundClass}
        isNewAnimal={isNewAnimal}
        animalId={animalId}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        handleDeleteClick={handleDeleteClick}
        showDeleteConfirm={showDeleteConfirm}
        handleCancelDelete={handleCancelDelete}
        handleConfirmDelete={handleConfirmDelete}
        isDeleting={isDeleting}
      />
  );
}