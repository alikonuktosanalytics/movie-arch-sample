import { describe, expect, it } from 'vitest';
import { getSeasonTabLabel } from '../helpers';

describe('getSeasonTabLabel', () => {
  it('combines season number and year', () => {
    expect(getSeasonTabLabel({ number: 3, year: 2010 })).toBe('Season 3 · 2010');
  });
});
