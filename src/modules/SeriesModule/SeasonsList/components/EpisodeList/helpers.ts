import { formatDate, formatRating } from '@/lib/helpers/formatters';
import type { Episode } from '@/lib/types';

/** "58m · ★ 9.0 · Jan 20, 2008" */
export const formatEpisodeRowMeta = (episode: Pick<Episode, 'runtime' | 'rating' | 'airDate'>): string =>
  [`${episode.runtime}m`, `★ ${formatRating(episode.rating)}`, formatDate(episode.airDate)].join(' · ');

/** Highlights the best episode(s) of a season; ties all get the badge. */
export const getTopRatedEpisodeIds = (episodes: Pick<Episode, 'id' | 'rating'>[]): Set<string> => {
  if (episodes.length === 0) return new Set();
  const best = Math.max(...episodes.map((episode) => episode.rating));
  return new Set(episodes.filter((episode) => episode.rating === best).map((episode) => episode.id));
};
