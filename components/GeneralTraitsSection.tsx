import type { FieldConfig } from '../types/fields';
import type { RowLabel, FieldName } from '../types/form';

interface GeneralTraitsSectionProps {
  rows: RowLabel[];
  columns: FieldConfig[];
  isFieldVisible: (row: RowLabel, field: FieldName) => boolean;
}

export function GeneralTraitsSection({ rows, columns, isFieldVisible }: GeneralTraitsSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-700 mb-2">General Traits</h3>
      {/* Header Row */}
      <div className="grid grid-cols-8 gap-2 text-sm font-medium text-gray-700 bg-gray-200 p-2 rounded">
        <div></div> {/* Empty cell for row labels */}
        {columns.map((col, idx) => (
          <div key={idx}>{col.label}</div>
        ))}
      </div>
      {/* Data Rows */}
      <div className="mt-2 space-y-2">
        {rows.map((rowLabel, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-8 gap-2 items-center p-2 rounded bg-white">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {rowLabel}
            </div>
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="w-full">
                {isFieldVisible(rowLabel, col.label as FieldName) ? (
                  col.type === 'select' ? (
                    <select className="w-full border rounded px-2 py-1">
                      {col.options?.map((opt, optIdx) => (
                        <option key={optIdx} value={opt}>{opt || 'Select...'}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={col.type}
                      className="w-full border rounded px-2 py-1"
                    />
                  )
                ) : (
                  <div className="w-full h-[34px]" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}