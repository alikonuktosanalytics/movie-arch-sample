import { describe, expect, it } from 'vitest';
import { getCastMemberSubtitle, getCastSummary } from '../helpers';

const names = (...values: string[]) => values.map((name) => ({ name }));

describe('getCastSummary', () => {
  it('handles empty, single and pair', () => {
    expect(getCastSummary([])).toBe('');
    expect(getCastSummary(names('Tom Hardy'))).toBe('Tom Hardy');
    expect(getCastSummary(names('Tom Hardy', 'Cillian Murphy'))).toBe('Tom Hardy and Cillian Murphy');
  });

  it('collapses the rest into "and N more"', () => {
    expect(getCastSummary(names('A', 'B', 'C', 'D'))).toBe('A, B and 2 more');
    expect(getCastSummary(names('A', 'B', 'C', 'D'), 3)).toBe('A, B, C and 1 more');
  });
});

describe('getCastMemberSubtitle', () => {
  it('derives age from the given current year (pure, no Date inside)', () => {
    expect(getCastMemberSubtitle({ birthYear: 1974, birthPlace: 'Los Angeles, USA' }, 2026)).toBe(
      'Age 52 · Los Angeles, USA',
    );
  });
});
