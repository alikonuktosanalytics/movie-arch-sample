import type { Actor } from '@/lib/types';

/**
 * The service returns cast members in storage order; billing order lives in `movie.castIds`.
 * Unknown ids are ignored so a stale reference never crashes the screen.
 */
export const orderCastByBilling = (cast: Actor[], castIds: string[]): Actor[] => {
  const byId = new Map(cast.map((actor) => [actor.id, actor]));
  return castIds.flatMap((id) => {
    const actor = byId.get(id);
    return actor ? [actor] : [];
  });
};
