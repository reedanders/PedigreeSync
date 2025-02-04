import type { FieldConfig } from '../types/fields';

export const fleeceColumns: FieldConfig[] = [
  { label: 'Fleece Date', type: 'date', required: true },
  { label: 'GFW', type: 'number' },
  { label: 'CFW', type: 'number' },
  { label: 'FD', type: 'number' },
  { label: 'FD Cv', type: 'number' },
  { label: 'Yield', type: 'number' },
  { label: 'SL', type: 'number' },
  { label: 'SS', type: 'number' },
  { label: 'Curv', type: 'number' }
];