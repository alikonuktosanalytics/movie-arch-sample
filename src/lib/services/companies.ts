import { companiesTable, moviesTable } from '@/lib/mocks';
import type { Company, CompanyDetail } from '@/lib/types';
import { mockFailure, mockRequest, NotFoundError } from './client';

export const getCompanies = (): Promise<Company[]> => mockRequest(companiesTable);

export const getCompanyDetail = (companyId: string): Promise<CompanyDetail> => {
  const company = companiesTable.find((item) => item.id === companyId);
  if (!company) return mockFailure(new NotFoundError('Company', companyId));

  return mockRequest({
    company,
    movies: moviesTable.filter((movie) => movie.companyId === companyId),
  });
};
