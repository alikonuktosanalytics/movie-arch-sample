import { pluralize } from '@/lib/helpers/formatters';
import type { Series } from '@/lib/types';
import { getEpisodeCount } from '../helpers';
import type { SeriesCatalogueStats } from './type';

export const getCatalogueStats = (seriesList: Series[]): SeriesCatalogueStats => ({
  seriesCount: seriesList.length,
  seasonCount: seriesList.reduce((total, series) => total + series.seasons.length, 0),
  episodeCount: seriesList.reduce((total, series) => total + getEpisodeCount(series), 0),
});

/** "3 series · 8 seasons · 33 episodes" */
export const formatCatalogueStats = (stats: SeriesCatalogueStats): string =>
  [
    pluralize(stats.seriesCount, 'series', 'series'),
    pluralize(stats.seasonCount, 'season'),
    pluralize(stats.episodeCount, 'episode'),
  ].join(' · ');

/** Highest rated first. */
export const sortSeriesByRating = (seriesList: Series[]): Series[] =>
  [...seriesList].sort((a, b) => b.rating - a.rating || a.title.localeCompare(b.title));
