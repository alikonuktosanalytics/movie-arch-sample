import { describe, expect, it } from 'vitest';
import { NO_VALUE } from '../const';
import { buildCompanyFacts } from '../helpers';

const COMPANY = { foundedYear: 2012, headquarters: 'New York City, New York', country: 'USA' };

describe('buildCompanyFacts', () => {
  it('formats stats into display values', () => {
    const facts = buildCompanyFacts(COMPANY, { movieCount: 1, averageRating: 7.1, activeYears: '2019' });
    expect(facts.map((fact) => fact.value)).toEqual(['2012', 'New York City, New York, USA', '1', '★ 7.1', '2019']);
  });

  it('uses placeholders when the company has no movies', () => {
    const facts = buildCompanyFacts(COMPANY, { movieCount: 0, averageRating: null, activeYears: null });
    expect(facts.slice(-2).map((fact) => fact.value)).toEqual([NO_VALUE, NO_VALUE]);
  });
});
