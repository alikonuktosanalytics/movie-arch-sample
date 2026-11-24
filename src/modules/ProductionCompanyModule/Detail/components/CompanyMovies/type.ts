import type { Movie } from '@/lib/types';

export interface CompanyMoviesProps {
  movies: Movie[];
  onSelectMovie: (movieId: string) => void;
}
