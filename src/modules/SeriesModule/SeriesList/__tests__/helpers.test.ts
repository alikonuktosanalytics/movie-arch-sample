import { describe, expect, it } from 'vitest';
import type { Series } from '@/lib/types';
import { formatCatalogueStats, getCatalogueStats, sortSeriesByRating } from '../helpers';

const series = (id: string, rating: number, episodesPerSeason: number[]): Series => ({
  id,
  title: id,
  network: 'HBO',
  startYear: 2010,
  endYear: null,
  genres: [],
  rating,
  overview: '',
  seasons: episodesPerSeason.map((count, index) => ({
    number: index + 1,
    year: 2010 + index,
    episodes: Array.from({ length: count }, (_, episodeIndex) => ({
      id: `${id}-${index}-${episodeIndex}`,
      number: episodeIndex + 1,
      title: '',
      runtime: 50,
      airDate: '2010-01-01',
      rating: 8,
      overview: '',
    })),
  })),
});

const LIST = [series('b', 8.5, [4, 3]), series('a', 9.5, [5]), series('c', 8.5, [3, 3, 3])];

describe('getCatalogueStats / formatCatalogueStats', () => {
  it('counts series, seasons and episodes', () => {
    const stats = getCatalogueStats(LIST);
    expect(stats).toEqual({ seriesCount: 3, seasonCount: 6, episodeCount: 21 });
    expect(formatCatalogueStats(stats)).toBe('3 series · 6 seasons · 21 episodes');
  });

  it('uses singular forms', () => {
    expect(formatCatalogueStats({ seriesCount: 1, seasonCount: 1, episodeCount: 1 })).toBe('1 series · 1 season · 1 episode');
  });
});

describe('sortSeriesByRating', () => {
  it('sorts by rating desc, then title', () => {
    expect(sortSeriesByRating(LIST).map((s) => s.id)).toEqual(['a', 'b', 'c']);
  });
});
