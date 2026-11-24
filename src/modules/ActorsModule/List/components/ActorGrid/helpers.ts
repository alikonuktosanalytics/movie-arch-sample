import type { Actor } from '@/lib/types';

/** "b. 1974 · Los Angeles" — country is dropped to keep cards compact. */
export const getActorSubtitle = (actor: Pick<Actor, 'birthYear' | 'birthPlace'>): string => {
  const city = actor.birthPlace.split(',')[0].trim();
  return city ? `b. ${actor.birthYear} · ${city}` : `b. ${actor.birthYear}`;
};
