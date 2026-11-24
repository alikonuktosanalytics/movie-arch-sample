import type { IconName } from '@/components/designSystem/Icon';
import type { ActorFilters } from './type';

export const SCREEN_TITLE = 'Actors';
export const SCREEN_SUBTITLE = 'Same List → Detail pattern as MoviesModule, reused for another domain.';
export const INITIAL_FILTERS: ActorFilters = { query: '', sort: 'name' };
export const EMPTY_TITLE = 'No actors found';
export const EMPTY_DESCRIPTION = 'Try searching by name or birthplace.';
export const EMPTY_ICON: IconName = 'search';
