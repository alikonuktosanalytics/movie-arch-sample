import type { BadgeTone } from '@/components/designSystem/Badge';
import type { ButtonVariant } from '@/components/designSystem/Button';
import type { IconName } from '@/components/designSystem/Icon';
import type { Movie } from '@/lib/types';

export interface MovieHeroProps {
  movie: Movie;
  isInWatchlist: boolean;
  onToggleWatchlist: () => void;
}

export interface WatchlistAction {
  label: string;
  icon: IconName;
  variant: ButtonVariant;
}

export type RatingTone = Extract<BadgeTone, 'success' | 'primary' | 'neutral'>;
