export type ActorSortKey = 'name' | 'youngest' | 'oldest';

export interface ActorFilters {
  query: string;
  sort: ActorSortKey;
}
