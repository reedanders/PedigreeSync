import type { VisibilityConfig } from '../types/form';

export const visibilityConfig: VisibilityConfig = {
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
    "EPWeaning": {
      Date: true,
      Weight: true,
      cFat: true,
      EMD: true,
      SC: true,
      WEC: true,
      Group: true
    },
    "PWeaning": {
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
    "Adult2": {
      Date: true,
      Weight: true,
      cFat: false,
      EMD: false,
      SC: false,
      WEC: false,
      Group: false
    },
    "Adult3": {
      Date: true,
      Weight: true,
      cFat: false,
      EMD: false,
      SC: false,
      WEC: false,
      Group: false
    },
    "Adult4": {
      Date: true,
      Weight: true,
      cFat: false,
      EMD: false,
      SC: false,
      WEC: false,
      Group: false
    },
    "Adult5": {
      Date: true,
      Weight: true,
      cFat: false,
      EMD: false,
      SC: false,
      WEC: false,
      Group: false
    }
} as const;