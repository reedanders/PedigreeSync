'use client'

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AnimalDetailView } from '@/components/animals/animalDetail/AnimalDetailView';
import { bcsMeasurements } from '@/components/demo/data/BodyConditionData';

export default function AnimalDetailPage() {
  const params = useParams();
  const router = useRouter();
  const routeAnimalId = params.id as string;
  const isNewAnimal = routeAnimalId === 'new';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [animalId, setAnimalId] = useState<string>(routeAnimalId || '');

  const handleSubmit = () => {console.log('Demo: Submit clicked');};
  const handleDeleteClick = () => {console.log('Demo: Delete clicked');};
  const handleCancelDelete = () => {console.log('Demo: Cancel delete clicked');}; 
  const handleConfirmDelete = () => {console.log('Demo: Confirm delete received');};

  // Filter BCS measurements for this animal
  const filteredBCS = bcsMeasurements.filter(
    m => m.seriesName === routeAnimalId
  );

  // Redirect if no BCS data for this animal and not a new animal
  useEffect(() => {
    if (!isNewAnimal && filteredBCS.length === 0) {
      router.replace('/demo/animals');
    }
  }, [isNewAnimal, filteredBCS.length, router]);

  // Container with rounded background
  const containerClass = "min-h-screen flex items-start justify-center";
  const backgroundClass = "w-full max-w-7xl";

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
        isDisabled={true} // Disable actions in demo mode
        bcsMeasurements={filteredBCS}
      />
  );
}