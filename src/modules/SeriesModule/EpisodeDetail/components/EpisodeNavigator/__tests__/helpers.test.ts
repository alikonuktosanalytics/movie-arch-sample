import { describe, expect, it } from 'vitest';
import { NONE_LABELS } from '../const';
import { getNavigatorText } from '../helpers';

describe('getNavigatorText', () => {
  it('shows code and title of the neighbour', () => {
    expect(getNavigatorText('next', { id: 'e2', code: 'S01E02', title: "Cat's in the Bag..." })).toBe(
      "S01E02 · Cat's in the Bag...",
    );
  });

  it('shows a direction-specific message at the ends', () => {
    expect(getNavigatorText('previous', null)).toBe(NONE_LABELS.previous);
    expect(getNavigatorText('next', null)).toBe(NONE_LABELS.next);
  });
});
