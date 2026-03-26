'use client';

import { ReactNode } from 'react';
import { SalonProvider } from '@/context/SalonContext';

export function Providers({ children }: { children: ReactNode }) {
  return <SalonProvider>{children}</SalonProvider>;
}
