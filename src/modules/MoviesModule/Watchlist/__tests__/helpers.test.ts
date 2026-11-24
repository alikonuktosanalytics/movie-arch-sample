import { describe, expect, it } from 'vitest';
import type { Movie } from '@/lib/types';
import { getWatchlistTotals, selectWatchlistMovies } from '../helpers';

const movie = (id: string, runtime: number, rating: number, genres: Movie['genres']): Movie => ({
  id,
  title: id,
  year: 2000,
  runtime,
  rating,
  genres,
  director: '',
  overview: '',
  castIds: [],
  companyId: 'c1',
});

const MOVIES = [
  movie('m1', 148, 8.8, ['Sci-Fi', 'Action']),
  movie('m2', 169, 8.7, ['Sci-Fi', 'Drama']),
  movie('m3', 122, 8.4, ['Crime', 'Drama']),
];

describe('selectWatchlistMovies', () => {
  it('follows the store order, not the fetch order', () => {
    expect(selectWatchlistMovies(MOVIES, ['m3', 'm1']).map((m) => m.id)).toEqual(['m3', 'm1']);
  });

  it('drops ids that were removed or never fetched', () => {
    expect(selectWatchlistMovies(MOVIES, ['m2', 'unknown']).map((m) => m.id)).toEqual(['m2']);
    expect(selectWatchlistMovies(MOVIES, [])).toEqual([]);
  });
});

describe('getWatchlistTotals', () => {
  it('computes count, total runtime, rounded average and top genre', () => {
    expect(getWatchlistTotals(MOVIES)).toEqual({
      count: 3,
      totalRuntime: 439,
      averageRating: 8.6,
      topGenre: 'Sci-Fi',
    });
  });

  it('returns zeros and no genre for an empty list', () => {
    expect(getWatchlistTotals([])).toEqual({ count: 0, totalRuntime: 0, averageRating: 0, topGenre: null });
  });
});
