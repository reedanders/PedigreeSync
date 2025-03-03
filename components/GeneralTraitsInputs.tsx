import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';
import { TRAITS_CONFIG, StageKey, FieldKey } from '../config/traitsConfig';

export function GeneralTraitsInputs() {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('GeneralTraitsInputs must be used within a FormProvider');
  }

  const { formData, setFormData } = context;

  const handleInputChange = (stage: StageKey, field: FieldKey, value: string | number | null) => {
    setFormData(prev => ({
      ...prev,
      generalTraits: {
        ...prev.generalTraits,
        [stage]: {
          ...prev.generalTraits?.[stage],
          [field]: value
        }
      }
    }));
  };

  return (
    <div>
      <table className="table w-full border-separate border-spacing-0">
        <thead>
          <tr className="bg-gray-50 dark:bg-base-300">
            <th className="text-gray-900 dark:text-base-content border-b border-gray-200 dark:border-gray-700"></th>
            {TRAITS_CONFIG.fieldKeys.map((fieldKey) => (
              <th key={fieldKey} className="text-gray-900 dark:text-base-content border-b border-gray-200 dark:border-gray-700">
                {TRAITS_CONFIG.stages.birth.fields[fieldKey as FieldKey].label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {TRAITS_CONFIG.stageKeys.map((stageKey) => (
            <tr key={stageKey} className="hover:bg-gray-100 dark:hover:bg-base-300">
              <td className="font-medium text-gray-900 dark:text-base-content">
                {TRAITS_CONFIG.stages[stageKey as StageKey].label}
              </td>
              {TRAITS_CONFIG.fieldKeys.map((fieldKey) => {
                const field = TRAITS_CONFIG.stages[stageKey as StageKey].fields[fieldKey as FieldKey];
                return (
                  <td key={fieldKey}>
                    {field.visible ? (
                      field.type === 'select' ? (
                        <select
                          value={formData.generalTraits?.[stageKey as StageKey]?.[fieldKey as FieldKey] || ''}
                          onChange={(e) => handleInputChange(stageKey as StageKey, fieldKey as FieldKey, e.target.value)}
                          className="select select-bordered select-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
                        >
                          {field.options?.map((opt, optIdx) => (
                            <option key={optIdx} value={opt}>
                              {opt || 'Select...'}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          className="input input-bordered input-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
                          value={formData.generalTraits?.[stageKey as StageKey]?.[fieldKey as FieldKey] || ''}
                          onChange={(e) => handleInputChange(stageKey as StageKey, fieldKey as FieldKey, e.target.value)}
                        />
                      )
                    ) : (
                      <div className="h-8" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}