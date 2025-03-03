import type { FieldConfig } from '../types/fields';

export const generalColumns: FieldConfig[] = [
  { label: 'date', type: 'date', required: true },
  { label: 'weight', type: 'number', required: true },
  { label: 'cFat', type: 'number' },
  { label: 'emd', type: 'number' },
  { label: 'sc', type: 'number' },
  { label: 'wec', type: 'number' },
  { label: 'group', type: 'select', options: ['', 'Group 1', 'Group 2'] }
];