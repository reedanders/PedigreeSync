'use client';

import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';
import { GeneralTraitsSection } from './GeneralTraitsSection';
import { FleeceTraitsSection } from './FleeceTraitsSection';
import { generalColumns } from '../config/generalTraits';
import { fleeceColumns } from '../config/fleeceTraits';
import { visibilityConfig } from '../config/visibilityConfig';
import type { RowLabel, FieldName } from '../types/form';

export function AnimalTraitsInputs() {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('AnimalTraitsInputs must be used within a FormProvider');
  }
  
  const { formData, setFormData } = context;

  const rows: RowLabel[] = [
    "Birth",
    "Weaning",
    "EP Weaning",
    "P Weaning",
    "Yearling",
    "Hogget",
    "Adult",
    "Adult 3",
    "Adult 4",
    "Adult 5"
  ];

  const isFieldVisible = (row: RowLabel, field: FieldName): boolean => {
    if (!(row in visibilityConfig)) return false;
    return visibilityConfig[row][field] ?? false;
  };

  return (
    <div>
      <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700">
        {/* General Traits Section */}
        <div className="pb-6">
          <div className="relative">
            <GeneralTraitsSection 
              rows={rows} 
              columns={generalColumns} 
              isFieldVisible={isFieldVisible}
            />
          </div>
        </div>

        {/* Fleece Traits Section */}
        <div className="pt-6">
          <div className="relative">
            <FleeceTraitsSection 
              rows={rows} 
              columns={fleeceColumns}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
