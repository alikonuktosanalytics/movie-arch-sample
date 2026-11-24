export interface CompanyFormValues {
  name: string;
  country: string;
  headquarters: string;
  /** Kept as string while editing; parsed on validation/submit. */
  foundedYear: string;
  description: string;
}

export type CompanyFormField = keyof CompanyFormValues;

export type CompanyFormErrors = Partial<Record<CompanyFormField, string>>;

export interface ValidationContext {
  currentYear: number;
  /** Names that already exist (API + store), compared case-insensitively. */
  existingNames: string[];
}
