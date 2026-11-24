import { normalizeText } from '@/lib/helpers/formatters';
import type { Company } from '@/lib/types';
import { CUSTOM_ID_PREFIX, ERROR_MESSAGES, FALLBACK_ID_SLUG, ID_TIMESTAMP_RADIX, LIMITS, YEAR_PATTERN } from './const';
import type { CompanyFormErrors, CompanyFormValues, ValidationContext } from './type';

const validateName = (name: string, existingNames: string[]): string | undefined => {
  const trimmed = name.trim();
  if (!trimmed) return ERROR_MESSAGES.required;
  if (trimmed.length < LIMITS.nameMin || trimmed.length > LIMITS.nameMax) return ERROR_MESSAGES.nameLength;
  const normalized = normalizeText(trimmed);
  if (existingNames.some((existing) => normalizeText(existing) === normalized)) return ERROR_MESSAGES.nameTaken;
  return undefined;
};

const validateFoundedYear = (value: string, currentYear: number): string | undefined => {
  const trimmed = value.trim();
  if (!trimmed) return ERROR_MESSAGES.required;
  if (!YEAR_PATTERN.test(trimmed)) return ERROR_MESSAGES.yearFormat;
  const year = Number(trimmed);
  if (year < LIMITS.minFoundedYear || year > currentYear) return ERROR_MESSAGES.yearRange(currentYear);
  return undefined;
};

/** Pure validation: same input → same errors. No side effects, no store/service access. */
export const validateCompanyForm = (values: CompanyFormValues, context: ValidationContext): CompanyFormErrors => {
  const errors: CompanyFormErrors = {
    name: validateName(values.name, context.existingNames),
    country: values.country.trim() ? undefined : ERROR_MESSAGES.required,
    headquarters: values.headquarters.trim() ? undefined : ERROR_MESSAGES.required,
    foundedYear: validateFoundedYear(values.foundedYear, context.currentYear),
    description: values.description.length > LIMITS.descriptionMax ? ERROR_MESSAGES.descriptionLength : undefined,
  };
  // Drop undefined keys so `Object.keys(errors)` reflects real problems only.
  return Object.fromEntries(Object.entries(errors).filter(([, message]) => message !== undefined)) as CompanyFormErrors;
};

export const isFormValid = (errors: CompanyFormErrors): boolean => Object.keys(errors).length === 0;

/** "Neon Rain Films!" + timestamp → "custom-neon-rain-films-lx3k9a" */
export const createCompanyId = (name: string, timestamp: number): string => {
  const slug = normalizeText(name)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${CUSTOM_ID_PREFIX}-${slug || FALLBACK_ID_SLUG}-${timestamp.toString(ID_TIMESTAMP_RADIX)}`;
};

/** Trims every field and converts the year; assumes values passed validation. */
export const buildCompanyFromForm = (values: CompanyFormValues, id: string): Company => ({
  id,
  name: values.name.trim(),
  country: values.country.trim(),
  headquarters: values.headquarters.trim(),
  foundedYear: Number(values.foundedYear.trim()),
  description: values.description.trim(),
  isUserCreated: true,
});
