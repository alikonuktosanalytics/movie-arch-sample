import { describe, expect, it } from 'vitest';
import type { Movie } from '@/lib/types';
import { applyMovieFilters, filterMovies, getAvailableGenres, sortMovies } from '../helpers';

const movie = (overrides: Partial<Movie>): Movie => ({
  id: 'x',
  title: 'Untitled',
  year: 2000,
  runtime: 100,
  genres: ['Drama'],
  rating: 7,
  director: 'Someone',
  overview: '',
  castIds: [],
  companyId: 'c1',
  ...overrides,
});

const MOVIES: Movie[] = [
  movie({ id: 'm1', title: 'Inception', year: 2010, rating: 8.8, genres: ['Sci-Fi', 'Action'], director: 'Christopher Nolan' }),
  movie({ id: 'm2', title: 'Joker', year: 2019, rating: 8.4, genres: ['Crime', 'Drama'], director: 'Todd Phillips' }),
  movie({ id: 'm3', title: 'Barbie', year: 2023, rating: 6.8, genres: ['Comedy'], director: 'Greta Gerwig' }),
  movie({ id: 'm4', title: 'Amélie', year: 2001, rating: 8.3, genres: ['Comedy', 'Drama'], director: 'Jean-Pierre Jeunet' }),
];

describe('filterMovies', () => {
  it('returns everything for an empty query and "all" genre', () => {
    expect(filterMovies(MOVIES, { query: '  ', genre: 'all' })).toHaveLength(4);
  });

  it('matches title or director, ignoring case and diacritics', () => {
    expect(filterMovies(MOVIES, { query: 'AMELIE', genre: 'all' }).map((m) => m.id)).toEqual(['m4']);
    expect(filterMovies(MOVIES, { query: 'nolan', genre: 'all' }).map((m) => m.id)).toEqual(['m1']);
  });

  it('combines query and genre with AND', () => {
    expect(filterMovies(MOVIES, { query: '', genre: 'Comedy' }).map((m) => m.id)).toEqual(['m3', 'm4']);
    expect(filterMovies(MOVIES, { query: 'bar', genre: 'Drama' })).toEqual([]);
  });
});

describe('sortMovies', () => {
  it('sorts by every key without mutating the input', () => {
    const snapshot = MOVIES.map((m) => m.id);
    expect(sortMovies(MOVIES, 'rating').map((m) => m.id)).toEqual(['m1', 'm2', 'm4', 'm3']);
    expect(sortMovies(MOVIES, 'newest').map((m) => m.id)).toEqual(['m3', 'm2', 'm1', 'm4']);
    expect(sortMovies(MOVIES, 'oldest').map((m) => m.id)).toEqual(['m4', 'm1', 'm2', 'm3']);
    expect(sortMovies(MOVIES, 'title').map((m) => m.title)).toEqual(['Amélie', 'Barbie', 'Inception', 'Joker']);
    expect(MOVIES.map((m) => m.id)).toEqual(snapshot);
  });

  it('breaks ties alphabetically for stable, predictable lists', () => {
    const tied = [movie({ id: 'b', title: 'B', rating: 8 }), movie({ id: 'a', title: 'A', rating: 8 })];
    expect(sortMovies(tied, 'rating').map((m) => m.id)).toEqual(['a', 'b']);
  });
});

describe('applyMovieFilters', () => {
  it('filters then sorts', () => {
    const result = applyMovieFilters(MOVIES, { query: '', genre: 'Drama', sort: 'oldest' });
    expect(result.map((m) => m.id)).toEqual(['m4', 'm2']);
  });
});

describe('getAvailableGenres', () => {
  it('returns unique genres alphabetically', () => {
    expect(getAvailableGenres(MOVIES)).toEqual(['Action', 'Comedy', 'Crime', 'Drama', 'Sci-Fi']);
  });
});
