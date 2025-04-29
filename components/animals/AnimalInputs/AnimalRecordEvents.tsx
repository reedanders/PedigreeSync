import { useContext } from 'react';
import { FormContext } from '@/lib/contexts/FormContext';
import { RecordEvent } from '@/lib/types/form';

export function AnimalRecordEvents() {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('AnimalRecordEvents must be used within a FormProvider');
  }

  const { recordEvents = [] } = context;
  
  if (recordEvents.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500 dark:text-gray-400">
        No record events found for this animal.
      </div>
    );
  }

  const measurementTypesSet = new Set<string>();
  const rows: { isHeader: boolean, eventType?: string, date?: string, measurements?: Record<string, any> }[] = [];

  // Group events by event_type, then by date
  const grouped = recordEvents.reduce((acc, event) => {
    measurementTypesSet.add(event.measurement_type);
    if (!acc[event.event_type]) acc[event.event_type] = {};
    if (!acc[event.event_type][event.event_date]) acc[event.event_type][event.event_date] = {};
    acc[event.event_type][event.event_date][event.measurement_type] = event.value;
    return acc;
  }, {} as Record<string, Record<string, Record<string, any>>>);

  const measurementTypes = Array.from(measurementTypesSet).sort();

  // Flatten into a row list
  Object.entries(grouped).forEach(([eventType, dateGroup]) => {
    rows.push({ isHeader: true, eventType });
    Object.entries(dateGroup).sort(([a], [b]) => a.localeCompare(b)).forEach(([date, measurements]) => {
      rows.push({ isHeader: false, date, measurements });
    });
  });

  return (
    <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {/* Empty placeholder for date column */}
            <th className="py-3 px-4">
                &nbsp;
            </th>
            {measurementTypes.map(type => (
              <th key={type} className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {type}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {rows.map((row, idx) => (
            row.isHeader ? (
              <tr key={`header-${row.eventType}`} className="bg-gray-100 dark:bg-gray-800">
                <td colSpan={1 + measurementTypes.length} className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  {row.eventType}
                </td>
              </tr>
            ) : (
              <tr key={`row-${row.date}-${idx}`} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="py-2 px-4 text-sm font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap">
                  {row.date}
                </td>
                {measurementTypes.map(type => (
                  <td key={type} className="py-2 px-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    {row.measurements?.[type] !== undefined ? (
                      <span className="font-mono">{row.measurements[type]}</span>
                    ) : (
                      <span className="text-gray-300 dark:text-gray-600">—</span>
                    )}
                  </td>
                ))}
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
}
