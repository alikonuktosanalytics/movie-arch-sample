import { describe, expect, it } from 'vitest';
import { getCompanySubtitle } from '../helpers';

describe('getCompanySubtitle', () => {
  it('joins country, founding year and pluralized movie count', () => {
    expect(getCompanySubtitle({ country: 'USA', foundedYear: 1923 }, 7)).toBe('USA · Since 1923 · 7 movies');
    expect(getCompanySubtitle({ country: 'USA', foundedYear: 2012 }, 1)).toBe('USA · Since 2012 · 1 movie');
  });
});
