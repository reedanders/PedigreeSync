import Link from 'next/link';
import { usePathname } from 'next/navigation';

type BCSMeasurement = {
  seriesName: string;
  date: string;
  value: number;
};

export function AnimalsTable({
  animals,
  bcsMeasurements = [],
  dates = [],
}: {
  animals: any[];
  bcsMeasurements?: BCSMeasurement[];
  dates?: string[];
}) {
  const pathname = usePathname();
  const node = pathname.split('/')[1] || 'manage';
  const animalsHref = `/${node}/animals`;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">ID</th>
            {dates.map(date => (
              <th
                key={date}
                className="px-4 py-3 text-center text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider"
              >
                {date}
              </th>
            ))}
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {animals.map(animal => (
            <tr 
              key={animal.id} 
              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                {animal.id || 'Unknown'}
              </td>
              {dates.map(date => {
                const bcs = bcsMeasurements.find(
                  (m) => m.seriesName === animal.id && m.date === date
                );
                return (
                  <td
                    key={date}
                    className="px-4 py-3 text-center text-gray-900 dark:text-gray-100"
                  >
                    {bcs ? bcs.value : "-"}
                  </td>
                );
              })}
              <td className="px-4 py-3 text-right font-medium">
                <Link
                  href={`${animalsHref}/${animal.id}`}
                  className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
