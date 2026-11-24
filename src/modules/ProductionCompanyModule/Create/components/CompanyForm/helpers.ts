import { LIMITS } from '../../const';
import type { CompanyFormErrors, CompanyFormField, CompanyFormValues } from '../../type';

/** Character counter shown under the description field: "12 / 280". */
export const getFieldHint = (field: CompanyFormField, values: CompanyFormValues): string | undefined =>
  field === 'description' ? `${values.description.length} / ${LIMITS.descriptionMax}` : undefined;

export const countErrors = (errors: CompanyFormErrors): number => Object.values(errors).filter(Boolean).length;
