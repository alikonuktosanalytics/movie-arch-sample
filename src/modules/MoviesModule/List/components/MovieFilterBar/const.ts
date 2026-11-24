import type { SelectOption } from '@/components/designSystem/Input';
import type { MovieSortKey } from '../../type';

export const SEARCH_LABEL = 'Search';
export const SEARCH_PLACEHOLDER = 'Title or director…';
export const SORT_LABEL = 'Sort by';
export const ALL_GENRES_LABEL = 'All genres';
export const RESET_LABEL = 'Reset';

export const SORT_OPTIONS: SelectOption<MovieSortKey>[] = [
  { value: 'rating', label: 'Top rated' },
  { value: 'newest', label: 'Newest first' },
  { value: 'oldest', label: 'Oldest first' },
  { value: 'title', label: 'Title (A–Z)' },
];

/** Varied widths so the genre-chip skeleton looks like real chips. */
export const SKELETON_CHIP_WIDTHS = [84, 62, 70, 58, 66, 74];
