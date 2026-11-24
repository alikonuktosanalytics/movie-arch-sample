import { formatRating, formatRuntime } from '@/lib/helpers/formatters';
import type { Movie } from '@/lib/types';

/** "2010 · 2h 28m · ★ 8.8 · Christopher Nolan" */
export const formatWatchlistItemMeta = (movie: Pick<Movie, 'year' | 'runtime' | 'rating' | 'director'>): string =>
  [String(movie.year), formatRuntime(movie.runtime), `★ ${formatRating(movie.rating)}`, movie.director].join(' · ');
