import type { Series } from '@/lib/types';

export interface SeriesGridProps {
  seriesList: Series[];
  onSelectSeries: (seriesId: string) => void;
}

export interface SeriesCardMeta {
  years: string;
  seasonsLabel: string;
}
