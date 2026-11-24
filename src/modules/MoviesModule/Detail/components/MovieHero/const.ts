import type { IconName } from '@/components/designSystem/Icon';
export const ADD_TO_WATCHLIST = 'Add to watchlist';
export const REMOVE_FROM_WATCHLIST = 'In your watchlist';
export const POSTER_WIDTH = 220;

/** Rating thresholds used to colour the rating badge. */
export const RATING_TONE_THRESHOLDS = {
  excellent: 8.5,
  good: 7,
} as const;
export const RATING_ICON: IconName = 'star';
