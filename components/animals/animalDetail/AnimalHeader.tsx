import Link from 'next/link';

type AnimalHeaderProps = {
  isNewAnimal: boolean;
  animalId: string;
  isSubmitting: boolean;
  onSubmit: () => void;
  buttonPrimaryClass: string;
  buttonSecondaryClass: string;
};

export function AnimalHeader({
  isNewAnimal,
  animalId,
  isSubmitting,
  onSubmit,
  buttonPrimaryClass,
  buttonSecondaryClass
}: AnimalHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <div className="p-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">
            {isNewAnimal 
              ? 'Add New Animal' 
              : `Animal: ${animalId || 'Unknown'}`}
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
          <button
            onClick={onSubmit}
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
  );
}
