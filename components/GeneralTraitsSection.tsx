import type { FieldConfig } from '../types/fields';
import type { RowLabel, FieldName } from '../types/form';

interface GeneralTraitsSectionProps {
  rows: RowLabel[];
  columns: FieldConfig[];
  isFieldVisible: (row: RowLabel, field: FieldName) => boolean;
}

export function GeneralTraitsSection({ rows, columns, isFieldVisible }: GeneralTraitsSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
        General Traits
      </h3>
      
      {/* Header Row */}
      <div className="grid grid-cols-8 gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg shadow-sm">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400"></div>
        {columns.map((col, idx) => (
          <div key={idx} className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {col.label}
          </div>
        ))}
      </div>

      {/* Data Rows */}
      <div className="space-y-2">
        {rows.map((rowLabel, rowIndex) => (
          <div 
            key={rowIndex} 
            className="grid grid-cols-8 gap-4 items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {rowLabel}
            </div>
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="w-full">
                {isFieldVisible(rowLabel, col.label as FieldName) ? (
                  col.type === 'select' ? (
                    <select 
                      className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 sm:text-sm transition-colors duration-200"
                    >
                      {col.options?.map((opt, optIdx) => (
                        <option key={optIdx} value={opt}>{opt || 'Select...'}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={col.type}
                      className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 sm:text-sm transition-colors duration-200"
                    />
                  )
                ) : (
                  <div className="h-9" /> /* Maintain consistent height */
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}