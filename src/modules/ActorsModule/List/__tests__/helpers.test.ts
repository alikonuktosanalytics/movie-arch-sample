import { describe, expect, it } from 'vitest';
import type { Actor } from '@/lib/types';
import { applyActorFilters, filterActors, sortActors } from '../helpers';

const actor = (id: string, name: string, birthYear: number, birthPlace: string): Actor => ({
  id,
  name,
  birthYear,
  birthPlace,
  bio: '',
});

const ACTORS = [
  actor('a1', 'Leonardo DiCaprio', 1974, 'Los Angeles, USA'),
  actor('a3', 'Christian Bale', 1974, 'Haverfordwest, Wales'),
  actor('a9', 'Michael Caine', 1933, 'London, England'),
  actor('a10', 'Florence Pugh', 1996, 'Oxford, England'),
];

describe('filterActors', () => {
  it('matches name or birthplace case-insensitively', () => {
    expect(filterActors(ACTORS, 'caine').map((a) => a.id)).toEqual(['a9']);
    expect(filterActors(ACTORS, 'ENGLAND').map((a) => a.id)).toEqual(['a9', 'a10']);
  });

  it('returns the same list for a blank query', () => {
    expect(filterActors(ACTORS, '  ')).toBe(ACTORS);
  });
});

describe('sortActors', () => {
  it('sorts by name, youngest and oldest (ties by name)', () => {
    expect(sortActors(ACTORS, 'name').map((a) => a.id)).toEqual(['a3', 'a10', 'a1', 'a9']);
    expect(sortActors(ACTORS, 'youngest').map((a) => a.id)).toEqual(['a10', 'a3', 'a1', 'a9']);
    expect(sortActors(ACTORS, 'oldest').map((a) => a.id)).toEqual(['a9', 'a3', 'a1', 'a10']);
  });
});

describe('applyActorFilters', () => {
  it('filters then sorts', () => {
    expect(applyActorFilters(ACTORS, { query: 'england', sort: 'youngest' }).map((a) => a.id)).toEqual(['a10', 'a9']);
  });
});
