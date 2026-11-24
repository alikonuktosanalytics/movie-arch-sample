import type { Movie } from '@/lib/types';

export interface FilmographyProps {
  /** Already sorted by the screen (see Detail/helpers.ts). */
  movies: Movie[];
  onSelectMovie: (movieId: string) => void;
}

export interface DecadeGroup {
  decade: string;
  movies: Movie[];
}
