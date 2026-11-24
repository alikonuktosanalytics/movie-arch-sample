import type { Company } from '@/lib/types';
import type { CompanyStats } from '../../type';

export interface CompanyHeaderProps {
  company: Company;
  stats: CompanyStats;
}

export interface CompanyFact {
  label: string;
  value: string;
}
