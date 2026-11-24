import type { Company, Movie } from '@/lib/types';

export interface CompanyListData {
  companies: Company[];
  movies: Movie[];
}

export interface CompanyRow {
  company: Company;
  movieCount: number;
}
