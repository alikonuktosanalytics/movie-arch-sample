import { seriesTable } from '@/lib/mocks';
import type { EpisodeDetail, Series } from '@/lib/types';
import { mockFailure, mockRequest, NotFoundError } from './client';

export const getSeriesList = (): Promise<Series[]> => mockRequest(seriesTable);

export const getSeriesById = (seriesId: string): Promise<Series> => {
  const series = seriesTable.find((item) => item.id === seriesId);
  return series ? mockRequest(series) : mockFailure(new NotFoundError('Series', seriesId));
};

export const getEpisodeDetail = (seriesId: string, episodeId: string): Promise<EpisodeDetail> => {
  const series = seriesTable.find((item) => item.id === seriesId);
  if (!series) return mockFailure(new NotFoundError('Series', seriesId));

  for (const season of series.seasons) {
    const episode = season.episodes.find((item) => item.id === episodeId);
    if (episode) return mockRequest({ series, season, episode });
  }
  return mockFailure(new NotFoundError('Episode', episodeId));
};
