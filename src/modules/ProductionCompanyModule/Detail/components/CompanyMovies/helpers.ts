import type { Movie } from '@/lib/types';

/** Newest first, then highest rated — the most relevant releases lead. */
export const sortCompanyMovies = (movies: Movie[]): Movie[] =>
  [...movies].sort((a, b) => b.year - a.year || b.rating - a.rating);
