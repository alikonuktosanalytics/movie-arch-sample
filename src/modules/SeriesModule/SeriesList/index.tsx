import { useNavigate } from 'react-router-dom';
import { AsyncContent, EmptyState, PageHeader } from '@/components/common';
import { useAsync } from '@/lib/hooks/useAsync';
import { buildRoute } from '@/lib/navigation/routes';
import { getSeriesList } from '@/lib/services/series';
import { buildSeriesBreadcrumb, SeriesBreadcrumb } from '../components';
import { SeriesGrid } from './components';
import { EMPTY_TITLE, SCREEN_TITLE } from './const';
import { formatCatalogueStats, getCatalogueStats, sortSeriesByRating } from './helpers';
import { SeriesListSkeleton } from './skeleton';
import { styles } from './style';

/** Level 1 of 3: SeriesList → SeasonsList → EpisodeDetail */
export const SeriesListScreen = () => {
  const navigate = useNavigate();
  const seriesState = useAsync(getSeriesList, []);

  return (
    <div style={styles.screen}>
      <AsyncContent state={seriesState} skeleton={<SeriesListSkeleton />}>
        {(seriesList) => (
          <>
            <PageHeader
              top={<SeriesBreadcrumb items={buildSeriesBreadcrumb({})} />}
              title={SCREEN_TITLE}
              subtitle={formatCatalogueStats(getCatalogueStats(seriesList))}
            />
            {seriesList.length === 0 ? (
              <EmptyState title={EMPTY_TITLE} />
            ) : (
              <SeriesGrid
                seriesList={sortSeriesByRating(seriesList)}
                onSelectSeries={(seriesId) => navigate(buildRoute.seriesSeasons(seriesId))}
              />
            )}
          </>
        )}
      </AsyncContent>
    </div>
  );
};
