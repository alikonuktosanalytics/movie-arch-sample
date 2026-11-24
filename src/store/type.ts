import type { Company } from '@/lib/types';

export interface CompanyState {
  /** Companies created with ProductionCompanyModule/Create (there is no write API in the mock backend). */
  createdCompanies: Company[];
  addCompany: (company: Company) => void;
}

export interface WatchlistState {
  /** Only ids are stored; screens fetch the movies through services. */
  movieIds: string[];
  add: (movieId: string) => void;
  remove: (movieId: string) => void;
  toggle: (movieId: string) => void;
  clear: () => void;
}
