import type { Movie } from '@/lib/types';
import type { SortDirection } from './type';

/** Year order with title as tie-breaker; never mutates the input. */
export const sortFilmographyByYear = (movies: Movie[], direction: SortDirection): Movie[] =>
  [...movies].sort((a, b) => {
    const byYear = direction === 'asc' ? a.year - b.year : b.year - a.year;
    return byYear || a.title.localeCompare(b.title);
  });
