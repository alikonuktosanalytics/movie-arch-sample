import type { Series } from '@/lib/types';
import { formatEpisodeCode } from '../helpers';
import type { AdjacentEpisodes, EpisodeRef } from './type';

/** Flattens all seasons so "next" after a season finale is the next season's premiere. */
const flattenEpisodes = (series: Pick<Series, 'seasons'>): EpisodeRef[] =>
  series.seasons.flatMap((season) =>
    season.episodes.map((episode) => ({
      id: episode.id,
      title: episode.title,
      code: formatEpisodeCode(season.number, episode.number),
    })),
  );

export const getAdjacentEpisodes = (series: Pick<Series, 'seasons'>, episodeId: string): AdjacentEpisodes => {
  const all = flattenEpisodes(series);
  const index = all.findIndex((episode) => episode.id === episodeId);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: all[index - 1] ?? null,
    next: all[index + 1] ?? null,
  };
};
