export interface BreadcrumbItem {
  label: string;
  /** Omitted for the current (last) item. */
  to?: string;
}

export interface BreadcrumbInput {
  series?: { id: string; title: string };
  seasonNumber?: number;
  episode?: { code: string; title: string };
}

export interface SeriesBreadcrumbProps {
  items: BreadcrumbItem[];
}
