import { describe, expect, it } from 'vitest';
import { NO_VALUE } from '../const';
import { buildProfileFacts, getAge, getCareerSpan } from '../helpers';

describe('getAge', () => {
  it('subtracts years and never returns a negative age', () => {
    expect(getAge(1974, 2026)).toBe(52);
    expect(getAge(2030, 2026)).toBe(0);
  });
});

describe('getCareerSpan', () => {
  it('returns the min–max year range regardless of input order', () => {
    expect(getCareerSpan([{ year: 2023 }, { year: 2006 }, { year: 2010 }])).toBe('2006–2023');
  });

  it('collapses a single year and handles no movies', () => {
    expect(getCareerSpan([{ year: 2019 }, { year: 2019 }])).toBe('2019');
    expect(getCareerSpan([])).toBe(NO_VALUE);
  });
});

describe('buildProfileFacts', () => {
  it('builds the four profile facts', () => {
    const facts = buildProfileFacts({ birthYear: 1996, birthPlace: 'Oxford, England' }, [{ year: 2019 }, { year: 2024 }], 2026);
    expect(facts.map((fact) => fact.value)).toEqual(['1996, Oxford, England', '30', '2', '2019–2024']);
  });
});
