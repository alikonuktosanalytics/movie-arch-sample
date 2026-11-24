import { formatRating, formatRuntime, pluralize } from '@/lib/helpers/formatters';
import { average, roundTo, sum } from '@/lib/helpers/math';
import type { Season, Series } from '@/lib/types';
import type { SeasonStats } from './type';

/** Reads `?season=` defensively: missing, non-numeric or unknown values fall back to the first season. */
export const resolveSelectedSeason = (seasons: Season[], seasonParam: string | null): Season | null => {
  if (seasons.length === 0) return null;
  const requested = Number(seasonParam);
  return seasons.find((season) => season.number === requested) ?? seasons[0];
};

export const getSeasonStats = (season: Season): SeasonStats => ({
  episodeCount: season.episodes.length,
  totalRuntime: sum(season.episodes.map((episode) => episode.runtime)),
  averageRating: roundTo(average(season.episodes.map((episode) => episode.rating)), 1),
});

/** "4 episodes · 3h 22m · ★ 8.6 avg" */
export const formatSeasonStats = (stats: SeasonStats): string =>
  [pluralize(stats.episodeCount, 'episode'), formatRuntime(stats.totalRuntime), `★ ${formatRating(stats.averageRating)} avg`].join(
    ' · ',
  );

/** "AMC · 2008–2013 · Crime, Drama" */
export const formatSeriesSubtitle = (series: Pick<Series, 'network' | 'genres'> & { years: string }): string =>
  [series.network, series.years, series.genres.join(', ')].filter(Boolean).join(' · ');

/** Selected season's poster, falling back to the series poster (e.g. season without artwork). */
export const getSeasonPoster = (
  series: Pick<Series, 'posterUrl'>,
  season: Pick<Season, 'posterUrl'> | null | undefined,
): string | undefined => season?.posterUrl ?? series.posterUrl;
