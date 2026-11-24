import type { Movie } from '@/lib/types';

export interface WatchlistItemProps {
  movie: Movie;
  onOpen: () => void;
  onRemove: () => void;
}
