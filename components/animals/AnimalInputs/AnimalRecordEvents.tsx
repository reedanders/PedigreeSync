import { useContext } from 'react';
import { FormContext } from '@/lib/contexts/FormContext';

interface AnimalRecordEventsProps {
  isEditing: boolean;
}

export function AnimalRecordEvents({ isEditing }: AnimalRecordEventsProps) {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('AnimalRecordEvents must be used within a FormProvider');
  }

  const { recordEvents = [], setFormData } = context;

  const handleInputChange = (eventId: string, field: string, value: string | number | null) => {
    setFormData(prev => ({
      ...prev,
      recordEvents: prev.recordEvents?.map(event =>
        event.id === eventId ? { ...event, [field]: value } : event
      ),
    }));
  };

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
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {rows.map((row, idx) => (
            row.isHeader ? (
              <tr key={`header-${row.eventType}`} className="bg-gray-50 dark:bg-gray-800">
                <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-200 uppercase tracking-wide">
                  {row.eventType}
                </td>
                {measurementTypes.map(type => (
                  <td key={`header-${row.eventType}-${type}`} className="py-2 px-4 text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                    {type}
                  </td>
                ))}
              </tr>
            ) : (
              <tr key={`row-${row.date}-${idx}`} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="py-2 px-4 text-sm text-gray-900 dark:text-gray-200 whitespace-nowrap">
                  <input
                    type="date"
                    value={row.date || ''}
                    readOnly={!isEditing}
                    onChange={e => handleInputChange(row.date || '', 'event_date', e.target.value)}
                    className={`w-full bg-transparent border rounded-md px-2 py-1 focus:outline-none ${
                      isEditing
                        ? 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500'
                        : 'border-transparent text-gray-900 dark:text-gray-200 cursor-default'
                    }`}
                  />
                </td>
                {measurementTypes.map(type => (
                  <td key={type} className="py-2 px-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    <input
                      type="text"
                      value={row.measurements?.[type] || ''}
                      readOnly={!isEditing}
                      onChange={e => handleInputChange(row.date || '', type, e.target.value)}
                      className={`w-full bg-transparent border rounded-md px-2 py-1 focus:outline-none ${
                        isEditing
                          ? 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500'
                          : 'border-transparent text-gray-500 dark:text-gray-300 cursor-default'
                      }`}
                    />
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
