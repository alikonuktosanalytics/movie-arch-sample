import { formatYearRange } from '@/lib/helpers/formatters';
import { average, roundTo } from '@/lib/helpers/math';
import type { Movie } from '@/lib/types';
import type { CompanyStats } from './type';

export const getCompanyStats = (movies: Pick<Movie, 'rating' | 'year'>[]): CompanyStats => {
  if (movies.length === 0) return { movieCount: 0, averageRating: null, activeYears: null };
  const years = movies.map((movie) => movie.year);
  return {
    movieCount: movies.length,
    averageRating: roundTo(average(movies.map((movie) => movie.rating)), 1),
    activeYears: formatYearRange(Math.min(...years), Math.max(...years)),
  };
};
