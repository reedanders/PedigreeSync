import { AnimalHeader } from './AnimalHeader';
import { DeleteSection } from './DeleteSection';
import { DeleteConfirmationDialog } from './DeleteConfirmationDialog';

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
  isDisabled?: boolean; // optional prop for demo
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
  isDisabled = false, // default to false
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
