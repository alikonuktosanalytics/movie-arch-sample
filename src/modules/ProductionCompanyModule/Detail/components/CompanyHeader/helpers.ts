import { formatRating } from '@/lib/helpers/formatters';
import type { Company } from '@/lib/types';
import type { CompanyStats } from '../../type';
import { FACT_LABELS, NO_VALUE } from './const';
import type { CompanyFact } from './type';

export const buildCompanyFacts = (
  company: Pick<Company, 'foundedYear' | 'headquarters' | 'country'>,
  stats: CompanyStats,
): CompanyFact[] => [
  { label: FACT_LABELS.founded, value: String(company.foundedYear) },
  { label: FACT_LABELS.headquarters, value: `${company.headquarters}, ${company.country}` },
  { label: FACT_LABELS.movies, value: String(stats.movieCount) },
  { label: FACT_LABELS.rating, value: stats.averageRating === null ? NO_VALUE : `★ ${formatRating(stats.averageRating)}` },
  { label: FACT_LABELS.active, value: stats.activeYears ?? NO_VALUE },
];
