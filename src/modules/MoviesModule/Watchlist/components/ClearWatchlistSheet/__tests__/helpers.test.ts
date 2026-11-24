import { describe, expect, it } from 'vitest';
import { getClearMessage } from '../helpers';

describe('getClearMessage', () => {
  it('pluralizes the count', () => {
    expect(getClearMessage(1)).toContain('1 movie ');
    expect(getClearMessage(4)).toContain('4 movies');
  });

  it('has a dedicated message for an empty list', () => {
    expect(getClearMessage(0)).toBe('Your watchlist is already empty.');
  });
});
