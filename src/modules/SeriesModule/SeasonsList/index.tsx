import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { AsyncContent, EmptyState, PageHeader } from '@/components/common';
import { Poster } from '@/components/designSystem/Artwork';
import { formatYearRange } from '@/lib/helpers/formatters';
import { useAsync } from '@/lib/hooks/useAsync';
import { buildRoute } from '@/lib/navigation/routes';
import { getSeriesById } from '@/lib/services/series';
import { buildSeriesBreadcrumb, SeriesBreadcrumb } from '../components';
import { EpisodeList, SeasonTabs } from './components';
import { EMPTY_SEASONS, SEASON_POSTER_WIDTH, SEASON_QUERY_PARAM } from './const';
import { formatSeasonStats, formatSeriesSubtitle, getSeasonPoster, getSeasonStats, resolveSelectedSeason } from './helpers';
import { SeasonsListSkeleton } from './skeleton';
import { styles } from './style';
import type { SeasonsListParams } from './type';

/** Level 2 of 3: one series, its seasons and the episodes of the selected season. */
export const SeasonsListScreen = () => {
  const { seriesId = '' } = useParams<SeasonsListParams>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const seriesState = useAsync(() => getSeriesById(seriesId), [seriesId]);

  const selectSeason = (seasonNumber: number) =>
    setSearchParams({ [SEASON_QUERY_PARAM]: String(seasonNumber) }, { replace: true });

  return (
    <AsyncContent state={seriesState} skeleton={<SeasonsListSkeleton />}>
      {(series) => {
        const selectedSeason = resolveSelectedSeason(series.seasons, searchParams.get(SEASON_QUERY_PARAM));
        return (
          <div style={styles.screen}>
            <PageHeader
              top={<SeriesBreadcrumb items={buildSeriesBreadcrumb({ series: { id: series.id, title: series.title } })} />}
              title={series.title}
              subtitle={formatSeriesSubtitle({ ...series, years: formatYearRange(series.startYear, series.endYear) })}
            />
            <div style={styles.intro}>
              <Poster
                title={series.title}
                imageUrl={getSeasonPoster(series, selectedSeason)}
                width={SEASON_POSTER_WIDTH}
              />
              <p style={styles.overview}>{series.overview}</p>
            </div>
            {selectedSeason ? (
              <section style={styles.seasonPanel}>
                <SeasonTabs seasons={series.seasons} selectedNumber={selectedSeason.number} onSelect={selectSeason} />
                <span style={styles.seasonStats}>{formatSeasonStats(getSeasonStats(selectedSeason))}</span>
                <EpisodeList
                  seasonNumber={selectedSeason.number}
                  episodes={selectedSeason.episodes}
                  onSelectEpisode={(episodeId) => navigate(buildRoute.episodeDetail(series.id, episodeId))}
                />
              </section>
            ) : (
              <EmptyState title={EMPTY_SEASONS} />
            )}
          </div>
        );
      }}
    </AsyncContent>
  );
};
