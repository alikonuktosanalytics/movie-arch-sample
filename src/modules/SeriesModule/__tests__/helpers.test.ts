import { describe, expect, it } from 'vitest';
import { formatEpisodeCode, getEpisodeCount } from '../helpers';

describe('formatEpisodeCode', () => {
  it('zero-pads season and episode', () => {
    expect(formatEpisodeCode(1, 2)).toBe('S01E02');
    expect(formatEpisodeCode(12, 10)).toBe('S12E10');
  });
});

describe('getEpisodeCount', () => {
  it('sums episodes across seasons', () => {
    const series = {
      seasons: [
        { number: 1, year: 2008, episodes: [{}, {}, {}] },
        { number: 2, year: 2009, episodes: [{}, {}] },
      ],
    } as unknown as Parameters<typeof getEpisodeCount>[0];
    expect(getEpisodeCount(series)).toBe(5);
    expect(getEpisodeCount({ seasons: [] })).toBe(0);
  });
});
