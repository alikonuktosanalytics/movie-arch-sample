import type { CompanyFormValues } from './type';

export const SCREEN_TITLE = 'New production company';
export const SCREEN_SUBTITLE = 'Form screen: validation lives in helpers.ts, the result is written to the zustand store.';
export const BACK_LABEL = 'All companies';

export const INITIAL_VALUES: CompanyFormValues = {
  name: '',
  country: '',
  headquarters: '',
  foundedYear: '',
  description: '',
};

export const LIMITS = {
  nameMin: 2,
  nameMax: 60,
  descriptionMax: 280,
  /** First film studios appeared around the 1890s. */
  minFoundedYear: 1890,
} as const;

export const ERROR_MESSAGES = {
  required: 'This field is required',
  nameLength: `Must be between ${LIMITS.nameMin} and ${LIMITS.nameMax} characters`,
  nameTaken: 'A company with this name already exists',
  yearFormat: 'Enter a 4-digit year',
  yearRange: (currentYear: number) => `Must be between ${LIMITS.minFoundedYear} and ${currentYear}`,
  descriptionLength: `Max ${LIMITS.descriptionMax} characters`,
} as const;

export const CUSTOM_ID_PREFIX = 'custom';
/** Used when the name has no slug-able characters. */
export const FALLBACK_ID_SLUG = 'company';
/** Base-36 keeps the timestamp part of the id short. */
export const ID_TIMESTAMP_RADIX = 36;
export const YEAR_PATTERN = /^\d{4}$/;
