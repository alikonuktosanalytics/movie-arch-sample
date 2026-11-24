import type { Genre } from '@/lib/types';
import type { MovieFilters } from '../../type';
import { ALL_GENRES_LABEL } from './const';
import type { GenreChipOption } from './type';

/** "All genres" chip always first, then the genres that exist in the data. */
export const buildGenreOptions = (genres: Genre[]): GenreChipOption[] => [
  { value: 'all', label: ALL_GENRES_LABEL },
  ...genres.map((genre) => ({ value: genre, label: genre })),
];

/** Whether the reset button should be enabled (sort alone also counts as a change). */
export const hasActiveFilters = (filters: MovieFilters, initial: MovieFilters): boolean =>
  filters.query.trim() !== initial.query.trim() || filters.genre !== initial.genre || filters.sort !== initial.sort;
