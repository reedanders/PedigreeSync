import type { FieldConfig } from '../types/fields';
import type { RowLabel, FieldName } from '../types/form';

interface GeneralTraitsSectionProps {
  rows: RowLabel[];
  columns: FieldConfig[];
  isFieldVisible: (row: RowLabel, field: FieldName) => boolean;
}

export function GeneralTraitsSection({ rows, columns, isFieldVisible }: GeneralTraitsSectionProps) {
  return (
    <div className="card bg-white dark:bg-base-300 shadow-xl">
      <div className="card-body">
        <h3 className="card-title text-gray-900 dark:text-base-content">
          General Traits
        </h3>
        
        <div className="overflow-x-auto">
          <table className="table w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-gray-50 dark:bg-base-300">
                <th className="text-gray-900 dark:text-base-content border-b border-gray-200 dark:border-gray-700"></th>
                {columns.map((col, idx) => (
                  <th key={idx} className="text-gray-900 dark:text-base-content border-b border-gray-200 dark:border-gray-700">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {rows.map((rowLabel, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-100 dark:hover:bg-base-300">
                  <td className="font-medium text-gray-900 dark:text-base-content">
                    {rowLabel}
                  </td>
                  {columns.map((col, colIndex) => (
                    <td key={colIndex}>
                      {isFieldVisible(rowLabel, col.label as FieldName) ? (
                        col.type === 'select' ? (
                          <select className="select select-bordered select-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content">
                            {col.options?.map((opt, optIdx) => (
                              <option key={optIdx} value={opt}>
                                {opt || 'Select...'}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={col.type}
                            className="input input-bordered input-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
                          />
                        )
                      ) : (
                        <div className="h-8" />
                      )}
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