import type { Season } from '@/lib/types';

export interface SeasonTabsProps {
  seasons: Season[];
  selectedNumber: number;
  onSelect: (seasonNumber: number) => void;
}
