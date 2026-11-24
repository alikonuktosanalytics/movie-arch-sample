import { useNavigate, useParams } from 'react-router-dom';
import { AsyncContent } from '@/components/common';
import { useAsync } from '@/lib/hooks/useAsync';
import { buildRoute } from '@/lib/navigation/routes';
import { getEpisodeDetail } from '@/lib/services/series';
import { buildSeriesBreadcrumb, SeriesBreadcrumb } from '../components';
import { formatEpisodeCode } from '../helpers';
import { EpisodeInfo, EpisodeNavigator } from './components';
import { getAdjacentEpisodes } from './helpers';
import { EpisodeDetailSkeleton } from './skeleton';
import { styles } from './style';
import type { EpisodeDetailParams } from './type';

/** Level 3 of 3: a single episode with prev/next navigation across seasons. */
export const EpisodeDetailScreen = () => {
  const { seriesId = '', episodeId = '' } = useParams<EpisodeDetailParams>();
  const navigate = useNavigate();
  const detailState = useAsync(() => getEpisodeDetail(seriesId, episodeId), [seriesId, episodeId]);

  return (
    <AsyncContent state={detailState} skeleton={<EpisodeDetailSkeleton />}>
      {({ series, season, episode }) => {
        const code = formatEpisodeCode(season.number, episode.number);
        return (
          <div style={styles.screen}>
            <SeriesBreadcrumb
              items={buildSeriesBreadcrumb({
                series: { id: series.id, title: series.title },
                seasonNumber: season.number,
                episode: { code, title: episode.title },
              })}
            />
            <EpisodeInfo seriesTitle={series.title} episode={episode} code={code} />
            <EpisodeNavigator
              {...getAdjacentEpisodes(series, episode.id)}
              onNavigate={(targetId) => navigate(buildRoute.episodeDetail(series.id, targetId))}
              onBackToSeason={() => navigate(buildRoute.seriesSeasons(series.id, season.number))}
            />
          </div>
        );
      }}
    </AsyncContent>
  );
};
