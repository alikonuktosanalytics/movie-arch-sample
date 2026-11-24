import { describe, expect, it } from 'vitest';
import { getResultLabel } from '../helpers';

describe('getResultLabel', () => {
  it('shows only the total when nothing is filtered out', () => {
    expect(getResultLabel(12, 12)).toBe('12 movies');
    expect(getResultLabel(1, 1)).toBe('1 movie');
  });

  it('shows "x of y" when filtered', () => {
    expect(getResultLabel(3, 12)).toBe('Showing 3 of 12 movies');
  });
});
