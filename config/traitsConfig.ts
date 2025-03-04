import { FieldConfig } from '../types/fields';

export const TRAITS_CONFIG = {
  stages: {
    birth: {
      label: 'Birth',
      fields: {
        date: { 
          visible: true, 
          type: 'date', 
          label: 'Date',
          required: true 
        } as FieldConfig,
        weight: { 
          visible: true, 
          type: 'number', 
          label: 'Weight',
          required: true 
        } as FieldConfig,
        cFat: { 
          visible: false, 
          type: 'number', 
          label: 'cFat' 
        } as FieldConfig,
        emd: { 
          visible: false, 
          type: 'number', 
          label: 'EMD' 
        } as FieldConfig,
        sc: { 
          visible: false, 
          type: 'number', 
          label: 'SC' 
        } as FieldConfig,
        wec: { 
          visible: false, 
          type: 'number', 
          label: 'WEC' 
        } as FieldConfig,
        group: { 
          visible: false, 
          type: 'select', 
          label: 'Group',
          options: ['', 'Group 1', 'Group 2'] 
        } as FieldConfig
      }
    },
    weaning: {
      label: 'Weaning',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true } as FieldConfig,
        weight: { visible: true, type: 'number', label: 'Weight', required: true } as FieldConfig,
        cFat: { visible: true, type: 'number', label: 'cFat' } as FieldConfig,
        emd: { visible: true, type: 'number', label: 'EMD' } as FieldConfig,
        sc: { visible: false, type: 'number', label: 'SC' } as FieldConfig,
        wec: { visible: true, type: 'number', label: 'WEC' } as FieldConfig,
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] } as FieldConfig
      }
    },
    epWeaning: {
      label: 'EP Weaning',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true } as FieldConfig,
        weight: { visible: true, type: 'number', label: 'Weight', required: true } as FieldConfig,
        cFat: { visible: true, type: 'number', label: 'cFat' } as FieldConfig,
        emd: { visible: true, type: 'number', label: 'EMD' } as FieldConfig,
        sc: { visible: true, type: 'number', label: 'SC' } as FieldConfig,
        wec: { visible: true, type: 'number', label: 'WEC' } as FieldConfig,
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] } as FieldConfig
      }
    },
    pWeaning: {
      label: 'P Weaning',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true } as FieldConfig,
        weight: { visible: true, type: 'number', label: 'Weight', required: true } as FieldConfig,
        cFat: { visible: true, type: 'number', label: 'cFat' } as FieldConfig,
        emd: { visible: true, type: 'number', label: 'EMD' } as FieldConfig,
        sc: { visible: true, type: 'number', label: 'SC' } as FieldConfig,
        wec: { visible: true, type: 'number', label: 'WEC' } as FieldConfig,
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] } as FieldConfig
      }
    },
    yearling: {
      label: 'Yearling',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true } as FieldConfig,
        weight: { visible: true, type: 'number', label: 'Weight', required: true } as FieldConfig,
        cFat: { visible: true, type: 'number', label: 'cFat' } as FieldConfig,
        emd: { visible: true, type: 'number', label: 'EMD' } as FieldConfig,
        sc: { visible: true, type: 'number', label: 'SC' } as FieldConfig,
        wec: { visible: true, type: 'number', label: 'WEC' } as FieldConfig,
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] } as FieldConfig
      }
    },
    hogget: {
      label: 'Hogget',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true } as FieldConfig,
        weight: { visible: true, type: 'number', label: 'Weight', required: true } as FieldConfig,
        cFat: { visible: true, type: 'number', label: 'cFat' } as FieldConfig,
        emd: { visible: true, type: 'number', label: 'EMD' } as FieldConfig,
        sc: { visible: true, type: 'number', label: 'SC' } as FieldConfig,
        wec: { visible: true, type: 'number', label: 'WEC' } as FieldConfig,
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] } as FieldConfig
      }
    },
    adult: {
      label: 'Adult',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true } as FieldConfig,
        weight: { visible: true, type: 'number', label: 'Weight', required: true } as FieldConfig,
        cFat: { visible: true, type: 'number', label: 'cFat' } as FieldConfig,
        emd: { visible: true, type: 'number', label: 'EMD' } as FieldConfig,
        sc: { visible: true, type: 'number', label: 'SC' } as FieldConfig,
        wec: { visible: true, type: 'number', label: 'WEC' } as FieldConfig,
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] } as FieldConfig
      }
    },
    adult2: {
      label: 'Adult 2',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true } as FieldConfig,
        weight: { visible: true, type: 'number', label: 'Weight', required: true } as FieldConfig,
        cFat: { visible: false, type: 'number', label: 'cFat' } as FieldConfig,
        emd: { visible: false, type: 'number', label: 'EMD' } as FieldConfig,
        sc: { visible: false, type: 'number', label: 'SC' } as FieldConfig,
        wec: { visible: false, type: 'number', label: 'WEC' } as FieldConfig,
        group: { visible: false, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] } as FieldConfig
      }
    },
    adult3: {
      label: 'Adult 3',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true } as FieldConfig,
        weight: { visible: true, type: 'number', label: 'Weight', required: true } as FieldConfig,
        cFat: { visible: false, type: 'number', label: 'cFat' } as FieldConfig,
        emd: { visible: false, type: 'number', label: 'EMD' } as FieldConfig,
        sc: { visible: false, type: 'number', label: 'SC' } as FieldConfig,
        wec: { visible: false, type: 'number', label: 'WEC' } as FieldConfig,
        group: { visible: false, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] } as FieldConfig
      }
    },
    adult4: {
      label: 'Adult 4',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true } as FieldConfig,
        weight: { visible: true, type: 'number', label: 'Weight', required: true } as FieldConfig,
        cFat: { visible: false, type: 'number', label: 'cFat' } as FieldConfig,
        emd: { visible: false, type: 'number', label: 'EMD' } as FieldConfig,
        sc: { visible: false, type: 'number', label: 'SC' } as FieldConfig,
        wec: { visible: false, type: 'number', label: 'WEC' } as FieldConfig,
        group: { visible: false, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] } as FieldConfig
      }
    },
    adult5: {
      label: 'Adult 5',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true } as FieldConfig,
        weight: { visible: true, type: 'number', label: 'Weight', required: true } as FieldConfig,
        cFat: { visible: false, type: 'number', label: 'cFat' } as FieldConfig,
        emd: { visible: false, type: 'number', label: 'EMD' } as FieldConfig,
        sc: { visible: false, type: 'number', label: 'SC' } as FieldConfig,
        wec: { visible: false, type: 'number', label: 'WEC' } as FieldConfig,
        group: { visible: false, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] } as FieldConfig
      }
    }
  },

  // All field keys for iteration
  fieldKeys: ['date', 'weight', 'cFat', 'emd', 'sc', 'wec', 'group'],
  
  // All stage keys for iteration
  stageKeys: ['birth', 'weaning', 'epWeaning', 'pWeaning', 'yearling', 'hogget', 'adult', 'adult2', 'adult3', 'adult4', 'adult5']
};

// Type exports for TypeScript
export type StageKey = keyof typeof TRAITS_CONFIG['stages'];
export type FieldKey = keyof typeof TRAITS_CONFIG['stages']['birth']['fields'];