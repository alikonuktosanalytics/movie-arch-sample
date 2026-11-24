/**
 * Module-level shared helpers: used by more than one screen of SeriesModule
 * (SeasonsList → EpisodeList, EpisodeDetail → EpisodeInfo/Navigator, SeriesBreadcrumb).
 * Anything used by only one screen stays in that screen's helpers.ts.
 */
import type { Series } from '@/lib/types';

const pad = (value: number) => String(value).padStart(2, '0');

/** formatEpisodeCode(1, 2) → "S01E02" */
export const formatEpisodeCode = (seasonNumber: number, episodeNumber: number): string =>
  `S${pad(seasonNumber)}E${pad(episodeNumber)}`;

export const getEpisodeCount = (series: Pick<Series, 'seasons'>): number =>
  series.seasons.reduce((total, season) => total + season.episodes.length, 0);
