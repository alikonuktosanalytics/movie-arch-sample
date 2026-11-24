import type { Movie } from './movie';

export interface Actor {
  id: string;
  name: string;
  /** Remote profile photo. Optional: Avatar falls back to initials. */
  photoUrl?: string;
  birthYear: number;
  birthPlace: string;
  bio: string;
}

export interface ActorDetail {
  actor: Actor;
  movies: Movie[];
}
