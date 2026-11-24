import { useNavigate, useParams } from 'react-router-dom';
import { AsyncContent, BackButton } from '@/components/common';
import { useAsync } from '@/lib/hooks/useAsync';
import { buildRoute } from '@/lib/navigation/routes';
import { getMovieDetail } from '@/lib/services/movies';
import { selectIsInWatchlist, useWatchlistStore } from '@/store/watchlistStore';
import { CastList, MovieHero, ProductionInfo } from './components';
import { BACK_LABEL } from './const';
import { orderCastByBilling } from './helpers';
import { MovieDetailSkeleton } from './skeleton';
import { styles } from './style';
import type { MovieDetailParams } from './type';

export const MovieDetailScreen = () => {
  const { movieId = '' } = useParams<MovieDetailParams>();
  const navigate = useNavigate();
  const detailState = useAsync(() => getMovieDetail(movieId), [movieId]);
  const isInWatchlist = useWatchlistStore(selectIsInWatchlist(movieId));
  const toggleWatchlist = useWatchlistStore((state) => state.toggle);

  return (
    <div style={styles.screen}>
      <BackButton label={BACK_LABEL} onPress={() => navigate(buildRoute.movies())} />
      <AsyncContent state={detailState} skeleton={<MovieDetailSkeleton />}>
        {({ movie, cast, company }) => (
          <>
            <MovieHero movie={movie} isInWatchlist={isInWatchlist} onToggleWatchlist={() => toggleWatchlist(movie.id)} />
            <div style={styles.columns}>
              {/* Cross-module navigation: only through routes, never by importing ActorsModule. */}
              <CastList
                cast={orderCastByBilling(cast, movie.castIds)}
                onSelectActor={(actorId) => navigate(buildRoute.actorDetail(actorId))}
              />
              <ProductionInfo
                movie={movie}
                company={company}
                onSelectCompany={(companyId) => navigate(buildRoute.companyDetail(companyId))}
              />
            </div>
          </>
        )}
      </AsyncContent>
    </div>
  );
};
