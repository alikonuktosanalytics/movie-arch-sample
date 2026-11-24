import { describe, expect, it } from 'vitest';
import type { Company, Movie } from '@/lib/types';
import { buildCompanyRows, countMoviesByCompany } from '../helpers';

const company = (id: string, name: string, isUserCreated = false): Company => ({
  id,
  name,
  foundedYear: 2000,
  country: 'USA',
  headquarters: '',
  description: '',
  isUserCreated,
});

const movieOf = (companyId: string) => ({ companyId }) as Movie;

const API = [company('c1', 'Warner'), company('c5', 'A24'), company('c6', 'Lionsgate')];
const MOVIES = [movieOf('c1'), movieOf('c1'), movieOf('c5')];

describe('countMoviesByCompany', () => {
  it('counts movies per company id', () => {
    const counts = countMoviesByCompany(MOVIES);
    expect(counts.get('c1')).toBe(2);
    expect(counts.get('c5')).toBe(1);
    expect(counts.get('c6')).toBeUndefined();
  });
});

describe('buildCompanyRows', () => {
  it('sorts API companies by movie count, then name, with zero counts included', () => {
    const rows = buildCompanyRows(API, [], MOVIES);
    expect(rows.map((row) => [row.company.id, row.movieCount])).toEqual([
      ['c1', 2],
      ['c5', 1],
      ['c6', 0],
    ]);
  });

  it('puts user-created companies first', () => {
    const rows = buildCompanyRows(API, [company('custom-x', 'Xyz Films', true)], MOVIES);
    expect(rows[0].company.id).toBe('custom-x');
    expect(rows).toHaveLength(4);
  });

  it('ignores a created company that collides with an API id', () => {
    const rows = buildCompanyRows(API, [company('c1', 'Fake Warner', true)], MOVIES);
    expect(rows.filter((row) => row.company.id === 'c1')).toHaveLength(1);
    expect(rows[0].company.name).toBe('Warner');
  });
});
