import React from 'react';

type DeleteConfirmationDialogProps = {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  isDeleting: boolean;
  cardClass: string;
  cardBodyClass: string;
};

export function DeleteConfirmationDialog({
  open,
  onCancel,
  onConfirm,
  isDeleting,
  cardClass,
  cardBodyClass
}: DeleteConfirmationDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${cardClass} w-full max-w-md mx-4`}>
        <div className={cardBodyClass}>
          <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-white">
            Delete Animal
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Are you sure you want to delete this animal? This action cannot be undone.
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={onCancel}
              disabled={isDeleting}
              className="px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
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
}
