export type CompanyDetailParams = {
  companyId: string;
};

export interface CompanyStats {
  movieCount: number;
  averageRating: number | null;
  /** "2006–2023", or null when there are no movies */
  activeYears: string | null;
}
