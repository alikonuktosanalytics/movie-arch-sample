import type { Actor } from '@/lib/types';

export interface ActorGridProps {
  actors: Actor[];
  onSelectActor: (actorId: string) => void;
}
