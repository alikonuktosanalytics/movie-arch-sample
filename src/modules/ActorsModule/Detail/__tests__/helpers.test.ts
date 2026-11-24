import { describe, expect, it } from 'vitest';
import type { Movie } from '@/lib/types';
import { sortFilmographyByYear } from '../helpers';

const movie = (id: string, title: string, year: number): Movie => ({
  id,
  title,
  year,
  runtime: 100,
  genres: [],
  rating: 8,
  director: '',
  overview: '',
  castIds: [],
  companyId: 'c1',
});

const MOVIES = [movie('m3', 'The Dark Knight', 2008), movie('m5', 'Oppenheimer', 2023), movie('m1', 'Inception', 2010), movie('m0', 'Batman Begins', 2008)];

describe('sortFilmographyByYear', () => {
  it('sorts newest first, breaking ties by title', () => {
    expect(sortFilmographyByYear(MOVIES, 'desc').map((m) => m.id)).toEqual(['m5', 'm1', 'm0', 'm3']);
  });

  it('sorts oldest first', () => {
    expect(sortFilmographyByYear(MOVIES, 'asc').map((m) => m.id)).toEqual(['m0', 'm3', 'm1', 'm5']);
  });

  it('does not mutate the input', () => {
    const before = MOVIES.map((m) => m.id);
    sortFilmographyByYear(MOVIES, 'asc');
    expect(MOVIES.map((m) => m.id)).toEqual(before);
  });
});
