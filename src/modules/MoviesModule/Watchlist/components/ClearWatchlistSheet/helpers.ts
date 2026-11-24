import { pluralize } from '@/lib/helpers/formatters';

export const getClearMessage = (count: number): string =>
  count === 0
    ? 'Your watchlist is already empty.'
    : `This will remove ${pluralize(count, 'movie')} from your watchlist. This cannot be undone.`;
