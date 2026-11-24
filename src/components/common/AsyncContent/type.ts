import type { ReactNode } from 'react';
import type { UseAsyncResult } from '@/lib/hooks/type';

export interface AsyncContentProps<T> {
  state: UseAsyncResult<T>;
  /** The screen's own `skeleton.tsx` component. */
  skeleton: ReactNode;
  children: (data: T) => ReactNode;
}
