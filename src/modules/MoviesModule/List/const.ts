import type { IconName } from '@/components/designSystem/Icon';
import type { MovieFilters } from './type';

export const SCREEN_TITLE = 'Movies';
export const SCREEN_SUBTITLE = 'Search, filter by genre and sort the catalogue.';

export const INITIAL_FILTERS: MovieFilters = {
  query: '',
  genre: 'all',
  sort: 'rating',
};

export const EMPTY_TITLE = 'No movies match your filters';
export const EMPTY_DESCRIPTION = 'Try a different search term or genre.';
export const EMPTY_ACTION = 'Reset filters';
export const EMPTY_ICON: IconName = 'search';
