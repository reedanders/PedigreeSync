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