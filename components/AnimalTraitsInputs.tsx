'use client';

import React, { useContext } from 'react';
import { FormContext } from '../app/dashboard/page';
import type { FormDataType, AnimalTrait } from '../types/form';

export function AnimalTraitsInputs() {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('AnimalTraitsInputs must be used within a FormProvider');
  }
  
  const { formData, setFormData } = context;

  // The row labels (which also act as placeholders for the first column)
  const rows = [
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
    { label: 'Date', type: 'date', placeholder: 'Date' },
    { label: 'Weight', type: 'number', placeholder: 'Weight' },
    { label: 'cFat', type: 'number', placeholder: 'cFat' },
    { label: 'EMD', type: 'number', placeholder: 'EMD' },
    { label: 'SC', type: 'number', placeholder: 'SC' },
    { label: 'WEC', type: 'number', placeholder: 'WEC' },
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
            <div key={rowIndex} className="grid grid-cols-8 gap-2 items-center p-2 rounded bg-white">
              {/* Row Label */}
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {rowLabel}
              </div>

              {/* Column Inputs */}
              {generalColumns.map((col, colIndex) => {
                if (col.type === 'select') {
                  return (
                    <select key={colIndex} className="w-full border rounded px-2 py-1">
                      {col.options?.map((option, optIdx) => (
      
                                      <option key={optIdx} value={option}>
                          {option === '' ? 'Select Group' : option}
                        </option>
                      ))}
                    </select>
                  );
                } else {
                  return (
                    <input
                      key={colIndex}
                      type={col.type}
                      className="w-full border rounded px-2 py-1"
                    />
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
            <div key={rowIndex} className="grid grid-cols-9 gap-2 items-center p-2 rounded bg-white">
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
