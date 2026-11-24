import { describe, expect, it } from 'vitest';
import type { Episode, Season } from '@/lib/types';
import { formatSeasonStats, formatSeriesSubtitle, getSeasonPoster, getSeasonStats, resolveSelectedSeason } from '../helpers';

const episode = (runtime: number, rating: number): Episode => ({
  id: `${runtime}-${rating}`,
  number: 1,
  title: '',
  runtime,
  airDate: '2008-01-01',
  rating,
  overview: '',
});

const SEASONS: Season[] = [
  { number: 1, year: 2008, episodes: [episode(58, 9.0), episode(48, 8.6), episode(48, 8.7), episode(48, 8.2)] },
  { number: 2, year: 2009, episodes: [episode(47, 8.7)] },
];

describe('resolveSelectedSeason', () => {
  it('returns the season from the query param', () => {
    expect(resolveSelectedSeason(SEASONS, '2')?.number).toBe(2);
  });

  it('falls back to the first season for missing, invalid or unknown params', () => {
    expect(resolveSelectedSeason(SEASONS, null)?.number).toBe(1);
    expect(resolveSelectedSeason(SEASONS, 'abc')?.number).toBe(1);
    expect(resolveSelectedSeason(SEASONS, '9')?.number).toBe(1);
  });

  it('returns null when there are no seasons', () => {
    expect(resolveSelectedSeason([], '1')).toBeNull();
  });
});

describe('getSeasonStats / formatSeasonStats', () => {
  it('aggregates runtime and average rating', () => {
    const stats = getSeasonStats(SEASONS[0]);
    expect(stats).toEqual({ episodeCount: 4, totalRuntime: 202, averageRating: 8.6 });
    expect(formatSeasonStats(stats)).toBe('4 episodes · 3h 22m · ★ 8.6 avg');
  });
});

describe('formatSeriesSubtitle', () => {
  it('joins network, years and genres', () => {
    expect(formatSeriesSubtitle({ network: 'AMC', years: '2008–2013', genres: ['Crime', 'Drama'] })).toBe(
      'AMC · 2008–2013 · Crime, Drama',
    );
  });
});

describe('getSeasonPoster', () => {
  it('prefers the selected season poster', () => {
    expect(getSeasonPoster({ posterUrl: 'series.jpg' }, { posterUrl: 's2.jpg' })).toBe('s2.jpg');
  });

  it('falls back to the series poster', () => {
    expect(getSeasonPoster({ posterUrl: 'series.jpg' }, {})).toBe('series.jpg');
    expect(getSeasonPoster({ posterUrl: 'series.jpg' }, null)).toBe('series.jpg');
  });

  it('returns undefined when neither has artwork', () => {
    expect(getSeasonPoster({}, undefined)).toBeUndefined();
  });
});
