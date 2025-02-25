import type { FieldConfig } from '../types/fields';

export const generalColumns: FieldConfig[] = [
  { label: 'Date', type: 'date', required: true },
  { label: 'Weight', type: 'number', required: true },
  { label: 'cFat', type: 'number' },
  { label: 'EMD', type: 'number' },
  { label: 'SC', type: 'number' },
  { label: 'WEC', type: 'number' },
  { label: 'Group', type: 'select', options: ['', 'Group 1', 'Group 2'] }
];