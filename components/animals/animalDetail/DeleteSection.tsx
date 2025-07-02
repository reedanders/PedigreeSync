import React from 'react';

type DeleteSectionProps = {
  onDeleteClick: () => void;
};

export function DeleteSection({ onDeleteClick }: DeleteSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <div className="p-5 border-t border-gray-200 dark:border-gray-700">
        <div className="pt-2">
          <h2 className="text-lg font-medium text-red-600 dark:text-red-400 mb-4">Danger Zone</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-1">Delete this animal record</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Once deleted, this record cannot be recovered
              </p>
            </div>
            <button
              onClick={onDeleteClick}
              className="mt-4 sm:mt-0 px-4 py-2.5 text-white bg-red-600 hover:bg-red-700 rounded-md font-medium transition-colors"
            >
              Delete Animal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
