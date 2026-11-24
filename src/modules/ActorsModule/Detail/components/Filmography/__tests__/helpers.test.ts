import { describe, expect, it } from 'vitest';
import type { Movie } from '@/lib/types';
import { getDecadeLabel, groupByDecade } from '../helpers';

const movie = (id: string, year: number): Movie => ({
  id,
  title: id,
  year,
  runtime: 100,
  genres: [],
  rating: 8,
  director: '',
  overview: '',
  castIds: [],
  companyId: 'c1',
});

describe('getDecadeLabel', () => {
  it('floors to the decade', () => {
    expect(getDecadeLabel(2010)).toBe('2010s');
    expect(getDecadeLabel(2019)).toBe('2010s');
    expect(getDecadeLabel(2006)).toBe('2000s');
  });
});

describe('groupByDecade', () => {
  it('groups an already sorted list and preserves order', () => {
    const groups = groupByDecade([movie('m5', 2023), movie('m4', 2012), movie('m1', 2010), movie('m3', 2008)]);
    expect(groups.map((group) => group.decade)).toEqual(['2020s', '2010s', '2000s']);
    expect(groups[1].movies.map((m) => m.id)).toEqual(['m4', 'm1']);
  });

  it('returns no groups for no movies', () => {
    expect(groupByDecade([])).toEqual([]);
  });
});
