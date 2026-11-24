import type { ReactNode } from 'react';

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  /** Rendered above the title (e.g. a breadcrumb or BackButton). */
  top?: ReactNode;
  /** Rendered on the right (e.g. a primary action button). */
  actions?: ReactNode;
}
