import { describe, expect, it } from 'vitest';
import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../const';
import { formatMovieMeta, getRatingTone, getWatchlistAction } from '../helpers';

describe('formatMovieMeta', () => {
  it('joins year, runtime and genres', () => {
    expect(formatMovieMeta({ year: 2010, runtime: 148, genres: ['Sci-Fi', 'Action'] })).toBe('2010 · 2h 28m · Sci-Fi, Action');
  });

  it('omits the genre segment when there are no genres', () => {
    expect(formatMovieMeta({ year: 2019, runtime: 122, genres: [] })).toBe('2019 · 2h 2m');
  });
});

describe('getRatingTone', () => {
  it('maps ratings to tones on threshold boundaries', () => {
    expect(getRatingTone(9)).toBe('success');
    expect(getRatingTone(8.5)).toBe('success');
    expect(getRatingTone(8.4)).toBe('primary');
    expect(getRatingTone(7)).toBe('primary');
    expect(getRatingTone(6.8)).toBe('neutral');
  });
});

describe('getWatchlistAction', () => {
  it('switches label and variant based on watchlist state', () => {
    expect(getWatchlistAction(false)).toMatchObject({ label: ADD_TO_WATCHLIST, variant: 'primary' });
    expect(getWatchlistAction(true)).toMatchObject({ label: REMOVE_FROM_WATCHLIST, variant: 'secondary' });
  });
});
