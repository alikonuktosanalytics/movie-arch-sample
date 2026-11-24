import type { Genre } from '@/lib/types';

export interface WatchlistTotals {
  count: number;
  /** Minutes */
  totalRuntime: number;
  averageRating: number;
  topGenre: Genre | null;
}
