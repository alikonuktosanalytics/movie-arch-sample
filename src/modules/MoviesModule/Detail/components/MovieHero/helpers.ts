import { formatRuntime } from '@/lib/helpers/formatters';
import type { Movie } from '@/lib/types';
import { ADD_TO_WATCHLIST, RATING_TONE_THRESHOLDS, REMOVE_FROM_WATCHLIST } from './const';
import type { RatingTone, WatchlistAction } from './type';

/** "2010 · 2h 28m · Sci-Fi, Action" */
export const formatMovieMeta = (movie: Pick<Movie, 'year' | 'runtime' | 'genres'>): string =>
  [String(movie.year), formatRuntime(movie.runtime), movie.genres.join(', ')].filter(Boolean).join(' · ');

export const getRatingTone = (rating: number): RatingTone => {
  if (rating >= RATING_TONE_THRESHOLDS.excellent) return 'success';
  if (rating >= RATING_TONE_THRESHOLDS.good) return 'primary';
  return 'neutral';
};

export const getWatchlistAction = (isInWatchlist: boolean): WatchlistAction =>
  isInWatchlist
    ? { label: REMOVE_FROM_WATCHLIST, icon: 'check', variant: 'secondary' }
    : { label: ADD_TO_WATCHLIST, icon: 'plus', variant: 'primary' };
