'use client';

import { useContext } from 'react';
import { FormContext } from '@/lib/contexts/FormContext';
import type { FormDataType, AnimalNotes } from '@/lib/types/form';

export function AnimalNotesInputs() {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('AnimalNotesInputs must be used within a FormProvider');
  }
  
  const { formData, setFormData } = context;

  const updateField = (field: keyof AnimalNotes, value: string | number) => {
    setFormData((prev: FormDataType) => ({
      ...prev,
      animalNotes: {
        ...prev.animalNotes,
        [field]: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      {/* First Row - Group and Status */}
      <div className="grid grid-cols-2 gap-6">
        {/* Group Input */}
        <div className="relative">
          <label 
            htmlFor="group"
            className="block text-sm font-medium text-gray-900 dark:text-base-content"
          >
            Group
          </label>
          <select
            id="group"
            value={formData.animalNotes.group}
            onChange={(e) => updateField('group', Number(e.target.value))}
            className="select select-bordered select-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
          >
            <option value={0}>Unknown Group</option>
            <option value={1}>Stud Drop</option>
            <option value={2}>Stud Late</option>
            <option value={3}>Stud Out of Season</option>
            <option value={4}>Stud Early</option>
            <option value={5}>Stud AI Group</option>
            <option value={6}>Study ET Group</option>
          </select>
        </div>

        {/* Status Input */}
        <div className="relative">
          <label 
            htmlFor="status"
            className="block text-sm font-medium text-gray-900 dark:text-base-content"
          >
            Status
          </label>
          <select
            id="status"
            value={formData.animalNotes.status}
            onChange={(e) => updateField('status', Number(e.target.value))}
            className="select select-bordered select-sm w-full bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
          >
            <option value={0}>Current</option>
            <option value={1}>Culled</option>
            <option value={2}>Dead</option>
            <option value={3}>Missing</option>
            <option value={4}>Reference</option>
            <option value={5}>Sold</option>
          </select>
        </div>
      </div>

      {/* Second Row - Full Width Comment */}
      <div className="relative">
        <label 
          htmlFor="comment"
          className="block text-sm font-medium text-gray-900 dark:text-base-content"
        >
          Comment
        </label>
        <textarea
          id="comment"
          value={formData.animalNotes.comment}
          onChange={(e) => updateField('comment', e.target.value)}
          className="textarea textarea-bordered input-sm w-full h-[5rem] bg-white dark:bg-base-300 text-gray-900 dark:text-base-content"
          placeholder="Enter comment"
          rows={3}
        />
      </div>
    </div>
  );
}