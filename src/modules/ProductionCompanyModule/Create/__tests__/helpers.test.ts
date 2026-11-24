import { describe, expect, it } from 'vitest';
import { ERROR_MESSAGES, INITIAL_VALUES, LIMITS } from '../const';
import { buildCompanyFromForm, createCompanyId, isFormValid, validateCompanyForm } from '../helpers';
import type { CompanyFormValues } from '../type';

const CONTEXT = { currentYear: 2026, existingNames: ['Warner Bros. Pictures', 'A24'] };

const VALID: CompanyFormValues = {
  name: 'Neon Rain Films',
  country: 'Türkiye',
  headquarters: 'Istanbul',
  foundedYear: '2015',
  description: 'Independent studio.',
};

describe('validateCompanyForm', () => {
  it('returns no errors for a valid form', () => {
    const errors = validateCompanyForm(VALID, CONTEXT);
    expect(errors).toEqual({});
    expect(isFormValid(errors)).toBe(true);
  });

  it('flags every required field on an empty form (description is optional)', () => {
    const errors = validateCompanyForm(INITIAL_VALUES, CONTEXT);
    expect(Object.keys(errors).sort()).toEqual(['country', 'foundedYear', 'headquarters', 'name']);
    expect(isFormValid(errors)).toBe(false);
  });

  it('treats whitespace-only input as empty', () => {
    expect(validateCompanyForm({ ...VALID, country: '   ' }, CONTEXT).country).toBe(ERROR_MESSAGES.required);
  });

  it('enforces name length and uniqueness (case/diacritic-insensitive)', () => {
    expect(validateCompanyForm({ ...VALID, name: 'X' }, CONTEXT).name).toBe(ERROR_MESSAGES.nameLength);
    expect(validateCompanyForm({ ...VALID, name: '  a24 ' }, CONTEXT).name).toBe(ERROR_MESSAGES.nameTaken);
  });

  it('validates the founded year format and range', () => {
    expect(validateCompanyForm({ ...VALID, foundedYear: '15' }, CONTEXT).foundedYear).toBe(ERROR_MESSAGES.yearFormat);
    expect(validateCompanyForm({ ...VALID, foundedYear: '1850' }, CONTEXT).foundedYear).toBe(ERROR_MESSAGES.yearRange(2026));
    expect(validateCompanyForm({ ...VALID, foundedYear: '2027' }, CONTEXT).foundedYear).toBe(ERROR_MESSAGES.yearRange(2026));
    expect(validateCompanyForm({ ...VALID, foundedYear: String(LIMITS.minFoundedYear) }, CONTEXT).foundedYear).toBeUndefined();
  });

  it('limits description length', () => {
    const description = 'x'.repeat(LIMITS.descriptionMax + 1);
    expect(validateCompanyForm({ ...VALID, description }, CONTEXT).description).toBe(ERROR_MESSAGES.descriptionLength);
  });
});

describe('createCompanyId', () => {
  it('slugifies the name and appends a base36 timestamp', () => {
    const timestamp = 1_700_000_000_000;
    expect(createCompanyId('Neon Rain Films!', timestamp)).toBe(`custom-neon-rain-films-${timestamp.toString(36)}`);
    expect(createCompanyId('Amélie Studio', 1)).toBe('custom-amelie-studio-1');
  });

  it('falls back when the name has no usable characters', () => {
    expect(createCompanyId('!!!', 35)).toBe('custom-company-z');
  });
});

describe('buildCompanyFromForm', () => {
  it('trims values, parses the year and marks the company as user-created', () => {
    expect(buildCompanyFromForm({ ...VALID, name: '  Neon Rain Films  ', foundedYear: ' 2015 ' }, 'id-1')).toEqual({
      id: 'id-1',
      name: 'Neon Rain Films',
      country: 'Türkiye',
      headquarters: 'Istanbul',
      foundedYear: 2015,
      description: 'Independent studio.',
      isUserCreated: true,
    });
  });
});
