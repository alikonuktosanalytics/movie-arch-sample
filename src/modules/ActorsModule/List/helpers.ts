import { normalizeText } from '@/lib/helpers/formatters';
import type { Actor } from '@/lib/types';
import type { ActorFilters, ActorSortKey } from './type';

export const filterActors = (actors: Actor[], query: string): Actor[] => {
  const needle = normalizeText(query);
  if (needle === '') return actors;
  return actors.filter(
    (actor) => normalizeText(actor.name).includes(needle) || normalizeText(actor.birthPlace).includes(needle),
  );
};

const byName = (a: Actor, b: Actor) => a.name.localeCompare(b.name);

const COMPARATORS: Record<ActorSortKey, (a: Actor, b: Actor) => number> = {
  name: byName,
  youngest: (a, b) => b.birthYear - a.birthYear || byName(a, b),
  oldest: (a, b) => a.birthYear - b.birthYear || byName(a, b),
};

export const sortActors = (actors: Actor[], sort: ActorSortKey): Actor[] => [...actors].sort(COMPARATORS[sort]);

export const applyActorFilters = (actors: Actor[], filters: ActorFilters): Actor[] =>
  sortActors(filterActors(actors, filters.query), filters.sort);
