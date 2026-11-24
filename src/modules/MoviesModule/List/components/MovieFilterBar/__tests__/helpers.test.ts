import { describe, expect, it } from 'vitest';
import { INITIAL_FILTERS } from '../../../const';
import { ALL_GENRES_LABEL } from '../const';
import { buildGenreOptions, hasActiveFilters } from '../helpers';

describe('buildGenreOptions', () => {
  it('prepends the "all" option and keeps genre order', () => {
    expect(buildGenreOptions(['Crime', 'Drama'])).toEqual([
      { value: 'all', label: ALL_GENRES_LABEL },
      { value: 'Crime', label: 'Crime' },
      { value: 'Drama', label: 'Drama' },
    ]);
  });
});

describe('hasActiveFilters', () => {
  it('is false for the initial filters and whitespace-only queries', () => {
    expect(hasActiveFilters(INITIAL_FILTERS, INITIAL_FILTERS)).toBe(false);
    expect(hasActiveFilters({ ...INITIAL_FILTERS, query: '   ' }, INITIAL_FILTERS)).toBe(false);
  });

  it('is true when query, genre or sort changed', () => {
    expect(hasActiveFilters({ ...INITIAL_FILTERS, query: 'nolan' }, INITIAL_FILTERS)).toBe(true);
    expect(hasActiveFilters({ ...INITIAL_FILTERS, genre: 'Drama' }, INITIAL_FILTERS)).toBe(true);
    expect(hasActiveFilters({ ...INITIAL_FILTERS, sort: 'title' }, INITIAL_FILTERS)).toBe(true);
  });
});
