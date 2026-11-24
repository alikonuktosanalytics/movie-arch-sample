import { formatRuntime } from '@/lib/helpers/formatters';
import type { Company, Movie } from '@/lib/types';
import { FACT_LABELS, UNKNOWN_VALUE } from './const';
import type { ProductionFact } from './type';

/** Label/value rows for the production card; a missing company degrades to "Unknown" instead of hiding rows. */
export const buildProductionFacts = (
  movie: Pick<Movie, 'director' | 'year' | 'runtime'>,
  company: Pick<Company, 'name' | 'headquarters'> | null,
): ProductionFact[] => [
  { label: FACT_LABELS.director, value: movie.director },
  { label: FACT_LABELS.released, value: String(movie.year) },
  { label: FACT_LABELS.runtime, value: formatRuntime(movie.runtime) },
  { label: FACT_LABELS.studio, value: company?.name ?? UNKNOWN_VALUE },
  { label: FACT_LABELS.headquarters, value: company?.headquarters ?? UNKNOWN_VALUE },
];
