import type { Season } from '@/lib/types';

/** "Season 1 · 2008" */
export const getSeasonTabLabel = (season: Pick<Season, 'number' | 'year'>): string => `Season ${season.number} · ${season.year}`;
