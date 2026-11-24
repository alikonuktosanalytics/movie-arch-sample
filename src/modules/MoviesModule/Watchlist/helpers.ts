import { mostFrequent } from '@/lib/helpers/array';
import { average, roundTo, sum } from '@/lib/helpers/math';
import type { Movie } from '@/lib/types';
import type { WatchlistTotals } from './type';

/**
 * Movies are fetched once; afterwards the store is the source of truth.
 * Keeps store order and drops movies that were removed since the fetch (no refetch, no skeleton flash).
 */
export const selectWatchlistMovies = (movies: Movie[], movieIds: string[]): Movie[] => {
  const byId = new Map(movies.map((movie) => [movie.id, movie]));
  return movieIds.flatMap((id) => {
    const movie = byId.get(id);
    return movie ? [movie] : [];
  });
};

export const getWatchlistTotals = (movies: Movie[]): WatchlistTotals => ({
  count: movies.length,
  totalRuntime: sum(movies.map((movie) => movie.runtime)),
  averageRating: roundTo(average(movies.map((movie) => movie.rating)), 1),
  topGenre: mostFrequent(movies.flatMap((movie) => movie.genres)),
});
