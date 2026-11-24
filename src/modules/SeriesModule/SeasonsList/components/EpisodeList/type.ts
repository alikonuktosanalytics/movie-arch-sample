import type { Episode } from '@/lib/types';

export interface EpisodeListProps {
  seasonNumber: number;
  episodes: Episode[];
  onSelectEpisode: (episodeId: string) => void;
}
