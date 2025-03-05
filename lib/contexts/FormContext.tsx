'use client'

import { createContext } from 'react';
import type { FormContextType } from '@/lib/types/form';

export const FormContext = createContext<FormContextType | undefined>(undefined);