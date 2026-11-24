import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AsyncContent, EmptyState, PageHeader } from '@/components/common';
import { useAsync } from '@/lib/hooks/useAsync';
import { buildRoute } from '@/lib/navigation/routes';
import { getActors } from '@/lib/services/actors';
import { ActorGrid, ActorSearchBar } from './components';
import { EMPTY_DESCRIPTION, EMPTY_ICON, EMPTY_TITLE, INITIAL_FILTERS, SCREEN_SUBTITLE, SCREEN_TITLE } from './const';
import { applyActorFilters } from './helpers';
import { ActorListSkeleton } from './skeleton';
import { styles } from './style';
import type { ActorFilters } from './type';

export const ActorListScreen = () => {
  const navigate = useNavigate();
  const actorsState = useAsync(getActors, []);
  const [filters, setFilters] = useState<ActorFilters>(INITIAL_FILTERS);

  return (
    <div style={styles.screen}>
      <PageHeader title={SCREEN_TITLE} subtitle={SCREEN_SUBTITLE} />
      {/* The search bar does not depend on data, so it renders while the list is loading. */}
      <ActorSearchBar filters={filters} onChange={setFilters} />
      <AsyncContent state={actorsState} skeleton={<ActorListSkeleton />}>
        {(actors) => {
          const visibleActors = applyActorFilters(actors, filters);
          return visibleActors.length === 0 ? (
            <EmptyState icon={EMPTY_ICON} title={EMPTY_TITLE} description={EMPTY_DESCRIPTION} />
          ) : (
            <ActorGrid actors={visibleActors} onSelectActor={(actorId) => navigate(buildRoute.actorDetail(actorId))} />
          );
        }}
      </AsyncContent>
    </div>
  );
};
