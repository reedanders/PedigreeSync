import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';
import type { FieldConfig } from '../types/fields';
import { 
  TraitStage, 
  TraitField, 
  TRAIT_STAGE_LABELS, 
  TRAIT_FIELD_LABELS 
} from '../types/form';
import { generalColumns } from '../config/generalTraits';
import { visibilityConfig } from '../config/visibilityConfig';

// Use enum values for rows
const rows = Object.values(TraitStage);
const columns = generalColumns;

const isFieldVisible = (stage: TraitStage, field: TraitField): boolean => {
  if (!(stage in visibilityConfig)) return false;
  return visibilityConfig[stage][field] ?? false;
};

export function GeneralTraitsInputs() {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('GeneralTraitsInputs must be used within a FormProvider');
  }

  const { formData, setFormData } = context;

  const handleInputChange = (stage: TraitStage, field: TraitField, value: string | number) => {
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
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-4">
          <div className="relative">
            <h3 className="text-base font-medium text-gray-900 dark:text-base-content mb-4">
              General Traits
            </h3>
            
            <div className="overflow-x-auto">
              <table className="table w-full border-separate border-spacing-0">
                <thead>
                  <tr className="bg-gray-50 dark:bg-base-300">
                    <th className="text-gray-900 dark:text-base-content border-b border-gray-200 dark:border-gray-700"></th>
                    {columns.map((col, idx) => (
                      <th key={idx} className="text-gray-900 dark:text-base-content border-b border-gray-200 dark:border-gray-700">
                        {TRAIT_FIELD_LABELS[col.label as TraitField]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {rows.map((stage, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-100 dark:hover:bg-base-300">
                      <td className="font-medium text-gray-900 dark:text-base-content">
                        {TRAIT_STAGE_LABELS[stage]}
                      </td>
                      {columns.map((col, colIndex) => (
                        <td key={colIndex}>
                          {isFieldVisible(stage, col.label as TraitField) ? (
                            col.type === 'select' ? (
                              <select
                                value={formData.generalTraits?.[stage]?.[col.label as TraitField] || ''}
                                onChange={(e) => handleInputChange(stage, col.label as TraitField, e.target.value)}
                                className="select select-bordered select-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
                              >
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
                                value={formData.generalTraits?.[stage]?.[col.label as TraitField] || ''}
                                onChange={(e) => handleInputChange(stage, col.label as TraitField, e.target.value)}
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
      </div>
    </div>
  );
}