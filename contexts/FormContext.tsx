'use client'

import { createContext } from 'react';
import type { FormContextType } from '@/types/form';

export const FormContext = createContext<FormContextType | undefined>(undefined);