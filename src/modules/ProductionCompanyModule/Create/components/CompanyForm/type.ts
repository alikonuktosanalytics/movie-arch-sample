import type { CompanyFormErrors, CompanyFormField, CompanyFormValues } from '../../type';

export interface CompanyFormProps {
  values: CompanyFormValues;
  /** Already filtered by the screen (empty until the first submit). */
  errors: CompanyFormErrors;
  onChange: (field: CompanyFormField, value: string) => void;
  onSubmit: () => void;
}

export interface FieldConfig {
  field: CompanyFormField;
  label: string;
  placeholder: string;
  multiline?: boolean;
  inputMode?: 'text' | 'numeric';
  /** Spans both columns on wide screens. */
  fullWidth?: boolean;
}
