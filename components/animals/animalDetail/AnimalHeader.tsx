import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { BCSMeasurement } from '@/components/demo/data/BodyConditionData';

type AnimalHeaderProps = {
  isNewAnimal: boolean;
  animalId: string;
  isSubmitting: boolean;
  onSubmit: () => void;
  disabled?: boolean;
  bcsMeasurements?: BCSMeasurement[];
};

export function AnimalHeader({
  isNewAnimal,
  animalId,
  isSubmitting,
  onSubmit,
  disabled,
  bcsMeasurements,
}: AnimalHeaderProps) {
  const pathname = usePathname();
  const node = pathname.split('/')[1] || 'manage';
  const animalsHref = `/${node}/animals`;

  const buttonPrimaryClass = 'px-4 py-2.5 text-white bg-primary-600 hover:bg-primary-700 rounded-md font-medium transition-colors';
  const buttonSecondaryClass = 'px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md font-medium transition-colors';

  // Only show BCS table if not new, animalId is present, and bcsMeasurements is provided and not empty
  const showBCS = !isNewAnimal && animalId && Array.isArray(bcsMeasurements) && bcsMeasurements.length > 0;
  const animalBCS = showBCS ? bcsMeasurements : [];

  // Get all unique dates for this animal (sorted)
  const allDates = Array.from(new Set(animalBCS.map(m => m.date))).sort();

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
          {showBCS && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Body Condition Scores</h2>
              <table className="min-w-max text-sm border border-gray-200 dark:border-gray-700 rounded">
                <thead>
                  <tr>
                    {allDates.map(date => (
                      <th key={date} className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">{date}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {allDates.map(date => {
                      const bcs = animalBCS.find(m => m.date === date);
                      return (
                        <td key={date} className="px-2 py-1 text-center border-b border-gray-100 dark:border-gray-800">
                          {bcs ? bcs.value : "-"}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <Link
            href={animalsHref}
            className={buttonSecondaryClass}
          >
            Back to List
          </Link>
          <button
            onClick={onSubmit}
            disabled={isSubmitting || disabled}
            className={`${buttonPrimaryClass} ${(isSubmitting || disabled) ? 'opacity-70 cursor-not-allowed' : ''}`}
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
