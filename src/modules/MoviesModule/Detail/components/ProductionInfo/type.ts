import type { Company, Movie } from '@/lib/types';

export interface ProductionInfoProps {
  movie: Movie;
  company: Company | null;
  onSelectCompany: (companyId: string) => void;
}

export interface ProductionFact {
  label: string;
  value: string;
}
