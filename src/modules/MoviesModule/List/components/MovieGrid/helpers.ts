import { pluralize } from '@/lib/helpers/formatters';

/** "12 movies" when unfiltered, "Showing 3 of 12 movies" when filtered. */
export const getResultLabel = (visibleCount: number, totalCount: number): string =>
  visibleCount === totalCount
    ? pluralize(totalCount, 'movie')
    : `Showing ${visibleCount} of ${pluralize(totalCount, 'movie')}`;
