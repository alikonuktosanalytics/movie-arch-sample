import { describe, expect, it } from 'vitest';
import { formatEpisodeRowMeta, getTopRatedEpisodeIds } from '../helpers';

describe('formatEpisodeRowMeta', () => {
  it('joins runtime, rating and air date', () => {
    expect(formatEpisodeRowMeta({ runtime: 58, rating: 9, airDate: '2008-01-20' })).toBe('58m · ★ 9.0 · Jan 20, 2008');
  });
});

describe('getTopRatedEpisodeIds', () => {
  it('returns every episode sharing the best rating', () => {
    const ids = getTopRatedEpisodeIds([
      { id: 'e1', rating: 8.6 },
      { id: 'e2', rating: 9.3 },
      { id: 'e3', rating: 9.3 },
    ]);
    expect([...ids].sort()).toEqual(['e2', 'e3']);
  });

  it('returns an empty set for no episodes', () => {
    expect(getTopRatedEpisodeIds([]).size).toBe(0);
  });
});
