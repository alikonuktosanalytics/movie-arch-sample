import type { Genre } from '@/lib/types';
import type { GenreFilter, MovieFilters } from '../../type';

export interface MovieFilterBarProps {
  filters: MovieFilters;
  genres: Genre[];
  onChange: (next: MovieFilters) => void;
  onReset: () => void;
}

export interface GenreChipOption {
  value: GenreFilter;
  label: string;
}
