import type { SelectOption } from '@/components/designSystem/Input';
import type { ActorSortKey } from '../../type';

export const SEARCH_LABEL = 'Search';
export const SEARCH_PLACEHOLDER = 'Name or birthplace…';
export const SORT_LABEL = 'Sort by';

export const SORT_OPTIONS: SelectOption<ActorSortKey>[] = [
  { value: 'name', label: 'Name (A–Z)' },
  { value: 'youngest', label: 'Youngest first' },
  { value: 'oldest', label: 'Oldest first' },
];
