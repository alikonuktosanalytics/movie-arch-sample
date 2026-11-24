import { actorsTable, moviesTable } from '@/lib/mocks';
import type { Actor, ActorDetail } from '@/lib/types';
import { mockFailure, mockRequest, NotFoundError } from './client';

export const getActors = (): Promise<Actor[]> => mockRequest(actorsTable);

/** Note: movies come back unsorted — ordering is a screen concern (see ActorsModule/Detail/helpers.ts). */
export const getActorDetail = (actorId: string): Promise<ActorDetail> => {
  const actor = actorsTable.find((item) => item.id === actorId);
  if (!actor) return mockFailure(new NotFoundError('Actor', actorId));

  return mockRequest({
    actor,
    movies: moviesTable.filter((movie) => movie.castIds.includes(actorId)),
  });
};
