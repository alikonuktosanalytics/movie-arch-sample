import { normalizeText } from '@/lib/helpers/formatters';
import type { Genre, Movie } from '@/lib/types';
import type { MovieFilters, MovieSortKey } from './type';

/** Matches title or director, case/diacritic-insensitive, combined with the genre filter. */
export const filterMovies = (movies: Movie[], { query, genre }: Pick<MovieFilters, 'query' | 'genre'>): Movie[] => {
  const needle = normalizeText(query);
  return movies.filter((movie) => {
    const matchesGenre = genre === 'all' || movie.genres.includes(genre);
    const matchesQuery =
      needle === '' || normalizeText(movie.title).includes(needle) || normalizeText(movie.director).includes(needle);
    return matchesGenre && matchesQuery;
  });
};

const byTitle = (a: Movie, b: Movie) => a.title.localeCompare(b.title);

const COMPARATORS: Record<MovieSortKey, (a: Movie, b: Movie) => number> = {
  rating: (a, b) => b.rating - a.rating || byTitle(a, b),
  newest: (a, b) => b.year - a.year || byTitle(a, b),
  oldest: (a, b) => a.year - b.year || byTitle(a, b),
  title: byTitle,
};

/** Never mutates the input. */
export const sortMovies = (movies: Movie[], sort: MovieSortKey): Movie[] => [...movies].sort(COMPARATORS[sort]);

export const applyMovieFilters = (movies: Movie[], filters: MovieFilters): Movie[] =>
  sortMovies(filterMovies(movies, filters), filters.sort);

/** Unique genres present in the data, alphabetical — the filter bar only offers genres that exist. */
export const getAvailableGenres = (movies: Movie[]): Genre[] =>
  [...new Set(movies.flatMap((movie) => movie.genres))].sort((a, b) => a.localeCompare(b));
