import type { Movie } from './movie';

export interface Company {
  id: string;
  name: string;
  /** Remote logo. Optional: user-created companies have none and use initials. */
  logoUrl?: string;
  foundedYear: number;
  country: string;
  headquarters: string;
  description: string;
  /** true for companies created in the app (zustand store), not coming from the "API" */
  isUserCreated?: boolean;
}

export interface CompanyDetail {
  company: Company;
  movies: Movie[];
}
