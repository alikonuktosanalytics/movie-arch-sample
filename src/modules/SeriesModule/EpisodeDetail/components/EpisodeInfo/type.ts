import type { Episode } from '@/lib/types';

export interface EpisodeInfoProps {
  seriesTitle: string;
  episode: Episode;
  code: string;
}

export interface EpisodeFact {
  label: string;
  value: string;
}
