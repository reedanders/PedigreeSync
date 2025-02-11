import type { FieldConfig } from '../types/fields';
import type { RowLabel } from '../types/form';

interface FleeceTraitsSectionProps {
  rows: RowLabel[];
  columns: FieldConfig[];
}

export function FleeceTraitsSection({ rows, columns }: FleeceTraitsSectionProps) {
  return (
    <div className="card bg-white dark:bg-base-300 shadow-xl">
      <div className="card-body">
        <h3 className="card-title text-gray-900 dark:text-base-content">
          Fleece Traits
        </h3>
        
        <div className="overflow-x-auto">
          <table className="table w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-gray-50 dark:bg-base-300">
                {columns.map((col, idx) => (
                  <th key={idx} className="text-gray-900 dark:text-base-content border-b border-gray-200 dark:border-gray-700">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {rows.map((_, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-100 dark:hover:bg-base-300">
                  {columns.map((col, colIndex) => (
                    <td key={colIndex}>
                      <input
                        type={col.type}
                        className="input input-bordered input-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}