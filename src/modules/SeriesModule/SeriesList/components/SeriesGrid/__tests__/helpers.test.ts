import { describe, expect, it } from 'vitest';
import type { Season } from '@/lib/types';
import { getSeriesCardMeta } from '../helpers';

const seasons = (count: number) => Array.from({ length: count }, () => ({}) as Season);

describe('getSeriesCardMeta', () => {
  it('formats a finished series', () => {
    expect(getSeriesCardMeta({ startYear: 2008, endYear: 2013, seasons: seasons(3) })).toEqual({
      years: '2008–2013',
      seasonsLabel: '3 seasons',
    });
  });

  it('formats a running series with one season', () => {
    expect(getSeriesCardMeta({ startYear: 2014, endYear: null, seasons: seasons(1) })).toEqual({
      years: '2014–present',
      seasonsLabel: '1 season',
    });
  });
});
