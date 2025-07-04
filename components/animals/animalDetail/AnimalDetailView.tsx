import { AnimalHeader } from './AnimalHeader';
import { AnimalBCSCard } from './AnimalBCSCard';
import { DeleteSection } from './DeleteSection';
import { DeleteConfirmationDialog } from './DeleteConfirmationDialog';
import type { BCSMeasurement } from '@/components/demo/data/BodyConditionData';

type AnimalDetailViewProps = {
  containerClass: string;
  backgroundClass: string;
  isNewAnimal: boolean;
  animalId: string;
  isSubmitting: boolean;
  handleSubmit: () => void;
  handleDeleteClick: () => void;
  showDeleteConfirm: boolean;
  handleCancelDelete: () => void;
  handleConfirmDelete: () => void;
  isDeleting: boolean;
  isDisabled?: boolean;
  bcsMeasurements?: BCSMeasurement[];
};

export function AnimalDetailView({
  containerClass,
  backgroundClass,
  isNewAnimal,
  animalId,
  isSubmitting,
  handleSubmit,
  handleDeleteClick,
  showDeleteConfirm,
  handleCancelDelete,
  handleConfirmDelete,
  isDeleting,
  isDisabled = false,
  bcsMeasurements,
}: AnimalDetailViewProps) {
  return (
    <div className={containerClass}>
      <div className={backgroundClass}>
        <section className="space-y-6">
          <AnimalHeader
            isNewAnimal={isNewAnimal}
            animalId={animalId}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            disabled={isDisabled}
          />
          {bcsMeasurements && (
            <AnimalBCSCard
              isNewAnimal={isNewAnimal}
              animalId={animalId}
              bcsMeasurements={bcsMeasurements}
            />
          )}
          {!isNewAnimal && (
            <DeleteSection
              onDeleteClick={handleDeleteClick}
              disabled={isDisabled}
            />
          )}
        </section>
      </div>
      <DeleteConfirmationDialog
        open={showDeleteConfirm}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        isDeleting={isDeleting}
      />
    </div>
  );
}
