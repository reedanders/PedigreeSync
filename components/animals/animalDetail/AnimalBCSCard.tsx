import type { BCSMeasurement } from '@/components/demo/data/BodyConditionData';

type AnimalBCSCardProps = {
  isNewAnimal: boolean;
  animalId: string;
  bcsMeasurements?: BCSMeasurement[];
};

export function AnimalBCSCard({
  isNewAnimal,
  animalId,
  bcsMeasurements,
}: AnimalBCSCardProps) {
  // Only show BCS table if not new, animalId is present, and bcsMeasurements is provided and not empty
  const showBCS = !isNewAnimal && animalId && Array.isArray(bcsMeasurements) && bcsMeasurements.length > 0;
  const animalBCS = showBCS ? bcsMeasurements : [];

  // Get all unique dates for this animal (sorted)
  const allDates = Array.from(new Set(animalBCS.map(m => m.date))).sort();

  if (!showBCS) return null;

  return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Body Condition Scores</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  {allDates.map(date => (
                    <th
                      key={date}
                      className="px-4 py-3 text-center text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider"
                    >
                      {date}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  {allDates.map(date => {
                    const bcs = animalBCS.find(m => m.date === date);
                    return (
                      <td
                        key={date}
                        className="px-4 py-3 text-center text-gray-900 dark:text-gray-100"
                      >
                        {bcs ? bcs.value : "-"}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}