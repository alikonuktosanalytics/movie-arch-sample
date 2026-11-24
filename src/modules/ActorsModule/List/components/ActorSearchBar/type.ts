import type { ActorFilters } from '../../type';

export interface ActorSearchBarProps {
  filters: ActorFilters;
  onChange: (next: ActorFilters) => void;
}
