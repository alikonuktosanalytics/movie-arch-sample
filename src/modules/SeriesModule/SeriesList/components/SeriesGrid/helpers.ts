import { formatYearRange, pluralize } from '@/lib/helpers/formatters';
import type { Series } from '@/lib/types';
import type { SeriesCardMeta } from './type';

export const getSeriesCardMeta = (series: Pick<Series, 'startYear' | 'endYear' | 'seasons'>): SeriesCardMeta => ({
  years: formatYearRange(series.startYear, series.endYear),
  seasonsLabel: pluralize(series.seasons.length, 'season'),
});
