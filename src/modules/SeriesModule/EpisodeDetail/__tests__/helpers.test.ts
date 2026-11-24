import { describe, expect, it } from 'vitest';
import type { Season } from '@/lib/types';
import { getAdjacentEpisodes } from '../helpers';

const season = (number: number, ids: string[]): Season => ({
  number,
  year: 2000 + number,
  episodes: ids.map((id, index) => ({
    id,
    number: index + 1,
    title: id.toUpperCase(),
    runtime: 50,
    airDate: '2000-01-01',
    rating: 8,
    overview: '',
  })),
});

const SERIES = { seasons: [season(1, ['e1', 'e2']), season(2, ['e3', 'e4'])] };

describe('getAdjacentEpisodes', () => {
  it('finds neighbours inside a season', () => {
    const { previous, next } = getAdjacentEpisodes(SERIES, 'e3');
    expect(previous?.id).toBe('e2');
    expect(next).toEqual({ id: 'e4', title: 'E4', code: 'S02E02' });
  });

  it('crosses season boundaries (finale → next premiere)', () => {
    expect(getAdjacentEpisodes(SERIES, 'e2').next?.code).toBe('S02E01');
  });

  it('returns null at both ends and for unknown ids', () => {
    expect(getAdjacentEpisodes(SERIES, 'e1').previous).toBeNull();
    expect(getAdjacentEpisodes(SERIES, 'e4').next).toBeNull();
    expect(getAdjacentEpisodes(SERIES, 'nope')).toEqual({ previous: null, next: null });
  });
});
