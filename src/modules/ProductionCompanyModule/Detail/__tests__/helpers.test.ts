import { describe, expect, it } from 'vitest';
import { getCompanyStats } from '../helpers';

describe('getCompanyStats', () => {
  it('computes count, rounded average and active years', () => {
    expect(
      getCompanyStats([
        { rating: 8.8, year: 2010 },
        { rating: 9.0, year: 2008 },
        { rating: 6.8, year: 2023 },
      ]),
    ).toEqual({ movieCount: 3, averageRating: 8.2, activeYears: '2008–2023' });
  });

  it('returns nulls (not zeros) for a company without movies', () => {
    expect(getCompanyStats([])).toEqual({ movieCount: 0, averageRating: null, activeYears: null });
  });

  it('collapses a single active year', () => {
    expect(getCompanyStats([{ rating: 7.1, year: 2019 }]).activeYears).toBe('2019');
  });
});
