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
  const eventsByType: Record<string, RecordEvent[]> = recordEvents.reduce((acc, event) => {
    if (!acc[event.event_type]) {
        acc[event.event_type] = [];
    } 
    measurementTypesSet.add(event.measurement_type);
    acc[event.event_type].push(event);
    return acc;
  }, {} as Record<string, RecordEvent[]>);

  // Get unique measurement types across all events
  const measurementTypes = Array.from(measurementTypesSet).sort();

  // For each event type, organize by date
  const organizedEvents = Object.entries(eventsByType).reduce((eventTypeAcc, [eventType, events]) => {
    // For each event type, reduce its events by date
    eventTypeAcc[eventType] = events.reduce((dateAcc, event) => {
      // Create date entry if it doesn't exist
      if (!dateAcc[event.event_date]) {
        dateAcc[event.event_date] = {};
      }
      
      // Add the measurement value
      dateAcc[event.event_date][event.measurement_type] = event.value;
      
      return dateAcc;
    }, {} as Record<string, Record<string, any>>);
    
    return eventTypeAcc;
  }, {} as Record<string, Record<string, Record<string, any>>>);

  return (
    <div className="space-y-8">
      {Object.keys(eventsByType).map(eventType => {
        const dates = Object.keys(organizedEvents[eventType]).sort();
        
        return (
          <div key={eventType} className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            {/* Event Type Header */}
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                {eventType}
              </h3>
            </div>
            
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    {measurementTypes.map(type => (
                      <th 
                        key={type} 
                        scope="col" 
                        className="py-3 px-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      >
                        {type}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  {dates.map((date, idx) => (
                    <tr 
                      key={date} 
                      className={`hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
                    >
                      <td className="py-2 px-4 text-sm font-medium text-gray-900 dark:text-gray-200 whitespace-nowrap">
                        {date}
                      </td>
                      {measurementTypes.map(type => (
                        <td key={type} className="py-2 px-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {organizedEvents[eventType][date][type] !== undefined ? (
                            <span className="font-mono">{organizedEvents[eventType][date][type]}</span>
                          ) : (
                            <span className="text-gray-300 dark:text-gray-600">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}