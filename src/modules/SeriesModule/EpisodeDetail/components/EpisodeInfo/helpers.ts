import { formatDate, formatRating, formatRuntime } from '@/lib/helpers/formatters';
import type { Episode } from '@/lib/types';
import { FACT_LABELS } from './const';
import type { EpisodeFact } from './type';

export const buildEpisodeFacts = (episode: Pick<Episode, 'airDate' | 'runtime' | 'rating'>): EpisodeFact[] => [
  { label: FACT_LABELS.aired, value: formatDate(episode.airDate) },
  { label: FACT_LABELS.runtime, value: formatRuntime(episode.runtime) },
  { label: FACT_LABELS.rating, value: `★ ${formatRating(episode.rating)}` },
];
