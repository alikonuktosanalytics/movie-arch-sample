import type { Movie } from '@/lib/types';

export interface MovieGridProps {
  movies: Movie[];
  /** Size of the unfiltered list, used for the "x of y" label. */
  totalCount: number;
  onSelectMovie: (movieId: string) => void;
}
