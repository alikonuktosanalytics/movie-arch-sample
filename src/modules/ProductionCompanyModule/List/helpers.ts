import type { Company, Movie } from '@/lib/types';
import type { CompanyRow } from './type';

export const countMoviesByCompany = (movies: Pick<Movie, 'companyId'>[]): Map<string, number> =>
  movies.reduce((counts, movie) => counts.set(movie.companyId, (counts.get(movie.companyId) ?? 0) + 1), new Map<string, number>());

/**
 * Merges API companies with user-created ones (store). User-created companies come first,
 * the rest is sorted by movie count desc then name. A created company never shadows an API one with the same id.
 */
export const buildCompanyRows = (apiCompanies: Company[], createdCompanies: Company[], movies: Movie[]): CompanyRow[] => {
  const counts = countMoviesByCompany(movies);
  const apiIds = new Set(apiCompanies.map((company) => company.id));
  const toRow = (company: Company): CompanyRow => ({ company, movieCount: counts.get(company.id) ?? 0 });

  const created = createdCompanies.filter((company) => !apiIds.has(company.id)).map(toRow);
  const fromApi = apiCompanies
    .map(toRow)
    .sort((a, b) => b.movieCount - a.movieCount || a.company.name.localeCompare(b.company.name));

  return [...created, ...fromApi];
};
