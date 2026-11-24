import type { ReactNode } from 'react';

export interface GridProps {
  children: ReactNode;
  /** Columns auto-fill; each column is at least this wide (px). */
  minItemWidth?: number;
  gap?: number;
}
