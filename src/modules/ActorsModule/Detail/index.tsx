import { useNavigate, useParams } from 'react-router-dom';
import { AsyncContent, BackButton } from '@/components/common';
import { useAsync } from '@/lib/hooks/useAsync';
import { buildRoute } from '@/lib/navigation/routes';
import { getActorDetail } from '@/lib/services/actors';
import { ActorProfile, Filmography } from './components';
import { BACK_LABEL, FILMOGRAPHY_ORDER } from './const';
import { sortFilmographyByYear } from './helpers';
import { ActorDetailSkeleton } from './skeleton';
import { styles } from './style';
import type { ActorDetailParams } from './type';

export const ActorDetailScreen = () => {
  const { actorId = '' } = useParams<ActorDetailParams>();
  const navigate = useNavigate();
  const detailState = useAsync(() => getActorDetail(actorId), [actorId]);

  return (
    <div style={styles.screen}>
      <BackButton label={BACK_LABEL} onPress={() => navigate(buildRoute.actors())} />
      <AsyncContent state={detailState} skeleton={<ActorDetailSkeleton />}>
        {({ actor, movies }) => {
          const filmography = sortFilmographyByYear(movies, FILMOGRAPHY_ORDER);
          return (
            <>
              <ActorProfile actor={actor} movies={filmography} currentYear={new Date().getFullYear()} />
              {/* Cross-module link back into MoviesModule via the route builder. */}
              <Filmography movies={filmography} onSelectMovie={(movieId) => navigate(buildRoute.movieDetail(movieId))} />
            </>
          );
        }}
      </AsyncContent>
    </div>
  );
};
