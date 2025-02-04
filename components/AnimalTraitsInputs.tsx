'use client';

import { useContext } from 'react';
import { FormContext } from '../app/dashboard/page';
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
    <div className="p-6 space-y-8">
      <GeneralTraitsSection 
        rows={rows} 
        columns={generalColumns} 
        isFieldVisible={isFieldVisible} 
      />
      <FleeceTraitsSection 
        rows={rows} 
        columns={fleeceColumns} 
      />
    </div>
  );
}
