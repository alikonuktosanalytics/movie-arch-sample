import type { Actor, Movie } from '@/lib/types';

export interface ActorProfileProps {
  actor: Actor;
  movies: Movie[];
  /** Injected so helpers stay pure and testable. */
  currentYear: number;
}

export interface ProfileFact {
  label: string;
  value: string;
}
