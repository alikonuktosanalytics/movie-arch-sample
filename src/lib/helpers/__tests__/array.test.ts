import { describe, expect, it } from 'vitest';
import { isDefined, mostFrequent } from '../array';
import { average, roundTo } from '../math';

describe('isDefined', () => {
  it('filters null and undefined but keeps falsy values', () => {
    expect([0, null, '', undefined, false].filter(isDefined)).toEqual([0, '', false]);
  });
});

describe('mostFrequent', () => {
  it('returns the most frequent item, first occurrence wins ties', () => {
    expect(mostFrequent(['Drama', 'Crime', 'Drama'])).toBe('Drama');
    expect(mostFrequent(['Crime', 'Drama'])).toBe('Crime');
    expect(mostFrequent([])).toBeNull();
  });
});

describe('average / roundTo', () => {
  it('averages safely and rounds', () => {
    expect(average([])).toBe(0);
    expect(roundTo(average([8.8, 8.7, 9]), 2)).toBe(8.83);
  });
});
