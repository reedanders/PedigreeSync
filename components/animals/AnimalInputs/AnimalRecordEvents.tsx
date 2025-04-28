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
    <div>
      {Object.keys(eventsByType).map(eventType => {
        const dates = Object.keys(organizedEvents[eventType]).sort();
        
        return (
          <div key={eventType} className="mb-8">
            <h3 className="font-medium text-gray-900 dark:text-base-content mb-4">{eventType}</h3>
            
            <table className="table w-full border-separate border-spacing-0">
              <thead>
                <tr className="bg-gray-50 dark:bg-base-300">
                  <th className="text-gray-900 dark:text-base-content border-b border-gray-200 dark:border-gray-700">Date</th>
                  {measurementTypes.map(type => (
                    <th key={type} className="text-gray-900 dark:text-base-content border-b border-gray-200 dark:border-gray-700">
                      {type}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {dates.map(date => (
                  <tr key={date} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                    <td className="font-medium text-gray-900 dark:text-base-content">
                      {date}
                    </td>
                    {measurementTypes.map(type => (
                      <td key={type}>
                        {organizedEvents[eventType][date][type] !== undefined ? 
                          organizedEvents[eventType][date][type] : 
                          <div className="h-8" />
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}