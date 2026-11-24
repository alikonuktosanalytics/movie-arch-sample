import type { Genre } from '@/lib/types';

export type MovieSortKey = 'rating' | 'newest' | 'oldest' | 'title';

export type GenreFilter = Genre | 'all';

export interface MovieFilters {
  query: string;
  genre: GenreFilter;
  sort: MovieSortKey;
}
