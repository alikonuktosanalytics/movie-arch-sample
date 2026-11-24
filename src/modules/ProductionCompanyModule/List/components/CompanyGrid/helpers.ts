import { pluralize } from '@/lib/helpers/formatters';
import type { Company } from '@/lib/types';

/** "USA · Since 1923 · 7 movies" */
export const getCompanySubtitle = (company: Pick<Company, 'country' | 'foundedYear'>, movieCount: number): string =>
  [company.country, `Since ${company.foundedYear}`, pluralize(movieCount, 'movie')].join(' · ');
