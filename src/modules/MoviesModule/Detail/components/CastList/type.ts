import type { Actor } from '@/lib/types';

export interface CastListProps {
  /** Already in billing order. */
  cast: Actor[];
  onSelectActor: (actorId: string) => void;
}
