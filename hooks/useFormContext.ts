'use client'

import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}