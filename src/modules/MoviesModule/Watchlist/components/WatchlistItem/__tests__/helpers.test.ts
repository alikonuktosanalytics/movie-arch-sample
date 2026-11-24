import { describe, expect, it } from 'vitest';
import { formatWatchlistItemMeta } from '../helpers';

describe('formatWatchlistItemMeta', () => {
  it('joins year, runtime, rating and director', () => {
    expect(formatWatchlistItemMeta({ year: 2010, runtime: 148, rating: 8.8, director: 'Christopher Nolan' })).toBe(
      '2010 · 2h 28m · ★ 8.8 · Christopher Nolan',
    );
  });

  it('always shows one decimal for the rating', () => {
    expect(formatWatchlistItemMeta({ year: 2008, runtime: 152, rating: 9, director: 'X' })).toContain('★ 9.0');
  });
});
