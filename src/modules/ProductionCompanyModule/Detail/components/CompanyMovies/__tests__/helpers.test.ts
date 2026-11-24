import { describe, expect, it } from 'vitest';
import type { Movie } from '@/lib/types';
import { sortCompanyMovies } from '../helpers';

const movie = (id: string, year: number, rating: number) => ({ id, year, rating }) as Movie;

describe('sortCompanyMovies', () => {
  it('sorts newest first, then by rating', () => {
    const sorted = sortCompanyMovies([movie('a', 2008, 9), movie('b', 2023, 6.8), movie('c', 2023, 8.3), movie('d', 2010, 8.8)]);
    expect(sorted.map((m) => m.id)).toEqual(['c', 'b', 'd', 'a']);
  });
});
