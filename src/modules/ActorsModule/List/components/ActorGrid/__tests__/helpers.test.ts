import { describe, expect, it } from 'vitest';
import { getActorSubtitle } from '../helpers';

describe('getActorSubtitle', () => {
  it('keeps only the city part of the birthplace', () => {
    expect(getActorSubtitle({ birthYear: 1974, birthPlace: 'Los Angeles, USA' })).toBe('b. 1974 · Los Angeles');
  });

  it('handles a birthplace without a comma or an empty one', () => {
    expect(getActorSubtitle({ birthYear: 1990, birthPlace: 'Dalby' })).toBe('b. 1990 · Dalby');
    expect(getActorSubtitle({ birthYear: 1990, birthPlace: '' })).toBe('b. 1990');
  });
});
