import type { FieldConfig } from './type';

/** Config-driven form: adding a field = adding a line here (+ a rule in screen helpers). */
export const FIELDS: FieldConfig[] = [
  { field: 'name', label: 'Company name', placeholder: 'e.g. Neon Rain Films', fullWidth: true },
  { field: 'country', label: 'Country', placeholder: 'e.g. Türkiye' },
  { field: 'headquarters', label: 'Headquarters', placeholder: 'e.g. Istanbul' },
  { field: 'foundedYear', label: 'Founded year', placeholder: 'e.g. 2015', inputMode: 'numeric' },
  {
    field: 'description',
    label: 'Description',
    placeholder: 'What does this studio make?',
    multiline: true,
    fullWidth: true,
  },
];

export const SUBMIT_LABEL = 'Review & create';
export const ERROR_SUMMARY = 'Please fix the highlighted fields.';
