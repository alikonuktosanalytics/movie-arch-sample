import { describe, expect, it } from 'vitest';
import { formatDate, formatRuntime, formatYearRange, normalizeText, pluralize } from '../formatters';

describe('formatRuntime', () => {
  it('formats hours and minutes', () => {
    expect(formatRuntime(148)).toBe('2h 28m');
  });
  it('drops the zero part', () => {
    expect(formatRuntime(120)).toBe('2h');
    expect(formatRuntime(45)).toBe('45m');
  });
  it('guards against non-positive values', () => {
    expect(formatRuntime(0)).toBe('0m');
    expect(formatRuntime(-10)).toBe('0m');
  });
});

describe('formatYearRange', () => {
  it('handles running, single-year and multi-year ranges', () => {
    expect(formatYearRange(2014, null)).toBe('2014–present');
    expect(formatYearRange(2019, 2019)).toBe('2019');
    expect(formatYearRange(2008, 2013)).toBe('2008–2013');
  });
});

describe('pluralize', () => {
  it('uses singular only for exactly one', () => {
    expect(pluralize(1, 'movie')).toBe('1 movie');
    expect(pluralize(0, 'movie')).toBe('0 movies');
    expect(pluralize(3, 'series', 'series')).toBe('3 series');
  });
});

describe('formatDate', () => {
  it('formats ISO dates in UTC (no off-by-one across time zones)', () => {
    expect(formatDate('2008-01-20')).toBe('Jan 20, 2008');
  });
});

describe('normalizeText', () => {
  it('trims, lower-cases and strips diacritics', () => {
    expect(normalizeText('  Virtù e Fortuna ')).toBe('virtu e fortuna');
  });
});
