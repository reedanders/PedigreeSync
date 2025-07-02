import Link from 'next/link';

export function AnimalsTable({ animals }: { animals: any[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">ID</th>
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
              <td className="px-4 py-3 text-right font-medium">
                <Link
                  href={`/manage/animals/${animal.id}`}
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
