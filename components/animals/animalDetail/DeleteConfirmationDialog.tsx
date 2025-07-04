import React from 'react';

export function DeleteConfirmationDialog({
  open,
  onCancel,
  onConfirm,
  isDeleting,
}: {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  isDeleting: boolean;
}) {
  const cardClass = "bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700";
  const cardBodyClass = "p-5";
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
      <div className={cardClass}>
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
