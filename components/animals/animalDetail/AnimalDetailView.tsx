import { AnimalHeader } from './AnimalHeader';
import { DeleteSection } from './DeleteSection';
import { DeleteConfirmationDialog } from './DeleteConfirmationDialog';

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
}: {
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
}) {
  return (
    <div className={containerClass}>
      <div className={backgroundClass}>
        <section className="space-y-6">
          <AnimalHeader
            isNewAnimal={isNewAnimal}
            animalId={animalId}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
          {!isNewAnimal && (
            <DeleteSection onDeleteClick={handleDeleteClick} />
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
