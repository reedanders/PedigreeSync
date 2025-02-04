'use client';

import React, { useContext } from 'react';
import { FormContext } from '../app/dashboard/page';
import type { FormDataType, AnimalTrait, RowLabel, ColumnConfig, VisibilityConfig, FieldName } from '../types/form';

export function AnimalTraitsInputs() {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('AnimalTraitsInputs must be used within a FormProvider');
  }
  
  const { formData, setFormData } = context;

  // The row labels (which also act as placeholders for the first column)
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

  // Configuration for the General Traits Section
  const generalColumns = [
    { label: 'Date', type: 'date' },
    { label: 'Weight', type: 'number' },
    { label: 'cFat', type: 'number' },
    { label: 'EMD', type: 'number'},
    { label: 'SC', type: 'number' },
    { label: 'WEC', type: 'number' },
    { label: 'Group', type: 'select', options: ['', 'Group 1', 'Group 2'] },
  ];

  // Configuration for the Fleece Traits Section
  const fleeceColumns = [
    { label: 'Fleece Date', type: 'date', placeholder: 'Fleece Date' },
    { label: 'GFW', type: 'number', placeholder: 'GFW' },
    { label: 'CFW', type: 'number', placeholder: 'CFW' },
    { label: 'FD', type: 'number', placeholder: 'FD' },
    { label: 'FD Cv', type: 'number', placeholder: 'FD Cv' },
    { label: 'Yield', type: 'number', placeholder: 'Yield' },
    { label: 'SL', type: 'number', placeholder: 'SL' },
    { label: 'SS', type: 'number', placeholder: 'SS' },
    { label: 'Curv', type: 'number', placeholder: 'Curv' },
  ];

  // Configuration for input visibility by row type
  const visibilityConfig: VisibilityConfig = {
    "Birth": {
      Date: true,
      Weight: true,
      cFat: false,
      EMD: false,
      SC: false,
      WEC: false,
      Group: false
    },
    "Weaning": {
      Date: true,
      Weight: true,
      cFat: true,
      EMD: true,
      SC: false,
      WEC: true,
      Group: true
    },
    "EP Weaning": {
      Date: true,
      Weight: true,
      cFat: true,
      EMD: true,
      SC: true,
      WEC: true,
      Group: true
    },
    "P Weaning": {
      Date: true,
      Weight: true,
      cFat: true,
      EMD: true,
      SC: true,
      WEC: true,
      Group: true
    },
    "Yearling": {
      Date: true,
      Weight: true,
      cFat: true,
      EMD: true,
      SC: true,
      WEC: true,
      Group: true
    },
    "Hogget": {
      Date: true,
      Weight: true,
      cFat: true,
      EMD: true,
      SC: true,
      WEC: true,
      Group: true
    },
    "Adult": {
      Date: true,
      Weight: true,
      cFat: true,
      EMD: true,
      SC: true,
      WEC: true,
      Group: true
    },
    "Adult 3": {
      Date: true,
      Weight: true,
      cFat: false,
      EMD: false,
      SC: false,
      WEC: false,
      Group: false
    },
    "Adult 4": {
      Date: true,
      Weight: true,
      cFat: false,
      EMD: false,
      SC: false,
      WEC: false,
      Group: false
    },
    "Adult 5": {
      Date: true,
      Weight: true,
      cFat: false,
      EMD: false,
      SC: false,
      WEC: false,
      Group: false
    }
  } as const;

  const isFieldVisible = (row: RowLabel, columnLabel: FieldName): boolean => {
    return visibilityConfig[row]?.[columnLabel] ?? false;
  };

  return (
    <div className="p-6 bg-gray-100 space-y-8">
      {/* General Traits Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-2">General Traits</h3>
        {/* Header Row */}
        <div className="grid grid-cols-8 gap-2 text-sm font-medium text-gray-700 bg-gray-200 p-2 rounded">
          <div></div> {/* Empty cell for row label column */}
          {generalColumns.map((col, idx) => (
            <div key={idx}>{col.label}</div>
          ))}
        </div>
        {/* Data Rows */}
        <div className="mt-2 space-y-2">
          {rows.map((rowLabel, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-8 gap-2 items-center">
              {/* Row Label */}
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {rowLabel}
              </div>

              {/* Column Inputs */}
              {generalColumns.map((col, colIndex) => {
                if (col.type === 'select' && col.options) {
                  return (
                    <select key={colIndex} className="w-full border rounded px-2 py-1">
                      {col.options?.map((option, optIdx) => (
                        <option key={optIdx} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  );
                } else {
                  return (
                    <div key={colIndex} className="w-full">
                      {isFieldVisible(rowLabel, col.label) ? (
                        <input
                          type={col.type}
                          className="w-full border rounded px-2 py-1"
                        />
                      ) : (
                        <div className="w-full h-[34px]" /> // Maintain spacing
                      )}
                    </div>
                  );
                }
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Fleece Traits Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-2">Fleece Traits</h3>
        {/* Header Row */}
        <div className="grid grid-cols-9 gap-2 text-sm font-medium text-gray-700 bg-gray-200 p-2 rounded">
          {fleeceColumns.map((col, idx) => (
            <div key={idx}>{col.label}</div>
          ))}
        </div>
        {/* Data Rows */}
        <div className="mt-2 space-y-2">
          {rows.map((rowLabel, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-9 gap-2 items-center">
              {fleeceColumns.map((col, colIndex) => (
                <input
                  key={colIndex}
                  type={col.type}
                  className="w-full border rounded px-2 py-1"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
