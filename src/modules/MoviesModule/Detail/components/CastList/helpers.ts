import type { Actor } from '@/lib/types';
import { SUMMARY_NAME_COUNT } from './const';

/** "A", "A and B", "A, B and 2 more" */
export const getCastSummary = (cast: Pick<Actor, 'name'>[], maxNames: number = SUMMARY_NAME_COUNT): string => {
  const names = cast.map((actor) => actor.name);
  if (names.length === 0) return '';
  if (names.length === 1) return names[0];
  if (names.length <= maxNames) return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
  return `${names.slice(0, maxNames).join(', ')} and ${names.length - maxNames} more`;
};

/** "Age 50 · Los Angeles, USA" — subtitle under each cast member. */
export const getCastMemberSubtitle = (actor: Pick<Actor, 'birthYear' | 'birthPlace'>, currentYear: number): string =>
  `Age ${currentYear - actor.birthYear} · ${actor.birthPlace}`;
