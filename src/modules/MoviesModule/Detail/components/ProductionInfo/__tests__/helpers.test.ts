import { describe, expect, it } from 'vitest';
import { UNKNOWN_VALUE } from '../const';
import { buildProductionFacts } from '../helpers';

const MOVIE = { director: 'Christopher Nolan', year: 2010, runtime: 148 };

describe('buildProductionFacts', () => {
  it('builds all rows with formatted values', () => {
    const facts = buildProductionFacts(MOVIE, { name: 'Warner Bros. Pictures', headquarters: 'Burbank, California' });
    expect(facts.map((fact) => fact.value)).toEqual([
      'Christopher Nolan',
      '2010',
      '2h 28m',
      'Warner Bros. Pictures',
      'Burbank, California',
    ]);
  });

  it('keeps the same rows and shows "Unknown" when the company is missing', () => {
    const facts = buildProductionFacts(MOVIE, null);
    expect(facts).toHaveLength(5);
    expect(facts.slice(-2).map((fact) => fact.value)).toEqual([UNKNOWN_VALUE, UNKNOWN_VALUE]);
  });
});
