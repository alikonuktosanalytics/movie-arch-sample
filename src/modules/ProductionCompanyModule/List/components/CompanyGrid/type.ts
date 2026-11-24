import type { CompanyRow } from '../../type';

export interface CompanyGridProps {
  rows: CompanyRow[];
  onSelectCompany: (companyId: string) => void;
}
