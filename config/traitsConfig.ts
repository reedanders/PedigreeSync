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
        },
        weight: { 
          visible: true, 
          type: 'number', 
          label: 'Weight',
          required: true 
        },
        cFat: { 
          visible: false, 
          type: 'number', 
          label: 'cFat' 
        },
        emd: { 
          visible: false, 
          type: 'number', 
          label: 'EMD' 
        },
        sc: { 
          visible: false, 
          type: 'number', 
          label: 'SC' 
        },
        wec: { 
          visible: false, 
          type: 'number', 
          label: 'WEC' 
        },
        group: { 
          visible: false, 
          type: 'select', 
          label: 'Group',
          options: ['', 'Group 1', 'Group 2'] 
        }
      }
    },
    weaning: {
      label: 'Weaning',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true },
        weight: { visible: true, type: 'number', label: 'Weight', required: true },
        cFat: { visible: true, type: 'number', label: 'cFat' },
        emd: { visible: true, type: 'number', label: 'EMD' },
        sc: { visible: false, type: 'number', label: 'SC' },
        wec: { visible: true, type: 'number', label: 'WEC' },
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] }
      }
    },
    epWeaning: {
      label: 'EP Weaning',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true },
        weight: { visible: true, type: 'number', label: 'Weight', required: true },
        cFat: { visible: true, type: 'number', label: 'cFat' },
        emd: { visible: true, type: 'number', label: 'EMD' },
        sc: { visible: true, type: 'number', label: 'SC' },
        wec: { visible: true, type: 'number', label: 'WEC' },
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] }
      }
    },
    pWeaning: {
      label: 'P Weaning',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true },
        weight: { visible: true, type: 'number', label: 'Weight', required: true },
        cFat: { visible: true, type: 'number', label: 'cFat' },
        emd: { visible: true, type: 'number', label: 'EMD' },
        sc: { visible: true, type: 'number', label: 'SC' },
        wec: { visible: true, type: 'number', label: 'WEC' },
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] }
      }
    },
    yearling: {
      label: 'Yearling',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true },
        weight: { visible: true, type: 'number', label: 'Weight', required: true },
        cFat: { visible: true, type: 'number', label: 'cFat' },
        emd: { visible: true, type: 'number', label: 'EMD' },
        sc: { visible: true, type: 'number', label: 'SC' },
        wec: { visible: true, type: 'number', label: 'WEC' },
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] }
      }
    },
    hogget: {
      label: 'Hogget',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true },
        weight: { visible: true, type: 'number', label: 'Weight', required: true },
        cFat: { visible: true, type: 'number', label: 'cFat' },
        emd: { visible: true, type: 'number', label: 'EMD' },
        sc: { visible: true, type: 'number', label: 'SC' },
        wec: { visible: true, type: 'number', label: 'WEC' },
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] }
      }
    },
    adult: {
      label: 'Adult',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true },
        weight: { visible: true, type: 'number', label: 'Weight', required: true },
        cFat: { visible: true, type: 'number', label: 'cFat' },
        emd: { visible: true, type: 'number', label: 'EMD' },
        sc: { visible: true, type: 'number', label: 'SC' },
        wec: { visible: true, type: 'number', label: 'WEC' },
        group: { visible: true, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] }
      }
    },
    adult2: {
      label: 'Adult 2',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true },
        weight: { visible: true, type: 'number', label: 'Weight', required: true },
        cFat: { visible: false, type: 'number', label: 'cFat' },
        emd: { visible: false, type: 'number', label: 'EMD' },
        sc: { visible: false, type: 'number', label: 'SC' },
        wec: { visible: false, type: 'number', label: 'WEC' },
        group: { visible: false, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] }
      }
    },
    adult3: {
      label: 'Adult 3',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true },
        weight: { visible: true, type: 'number', label: 'Weight', required: true },
        cFat: { visible: false, type: 'number', label: 'cFat' },
        emd: { visible: false, type: 'number', label: 'EMD' },
        sc: { visible: false, type: 'number', label: 'SC' },
        wec: { visible: false, type: 'number', label: 'WEC' },
        group: { visible: false, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] }
      }
    },
    adult4: {
      label: 'Adult 4',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true },
        weight: { visible: true, type: 'number', label: 'Weight', required: true },
        cFat: { visible: false, type: 'number', label: 'cFat' },
        emd: { visible: false, type: 'number', label: 'EMD' },
        sc: { visible: false, type: 'number', label: 'SC' },
        wec: { visible: false, type: 'number', label: 'WEC' },
        group: { visible: false, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] }
      }
    },
    adult5: {
      label: 'Adult 5',
      fields: {
        date: { visible: true, type: 'date', label: 'Date', required: true },
        weight: { visible: true, type: 'number', label: 'Weight', required: true },
        cFat: { visible: false, type: 'number', label: 'cFat' },
        emd: { visible: false, type: 'number', label: 'EMD' },
        sc: { visible: false, type: 'number', label: 'SC' },
        wec: { visible: false, type: 'number', label: 'WEC' },
        group: { visible: false, type: 'select', label: 'Group', options: ['', 'Group 1', 'Group 2'] }
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

export type FieldConfig = {
  visible: boolean;
  type: string;
  label: string;
  required?: boolean;
  options?: string[];
};