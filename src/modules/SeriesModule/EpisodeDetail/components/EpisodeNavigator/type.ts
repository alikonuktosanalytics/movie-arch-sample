import type { AdjacentEpisodes } from '../../type';

export interface EpisodeNavigatorProps extends AdjacentEpisodes {
  onNavigate: (episodeId: string) => void;
  onBackToSeason: () => void;
}

export type NavigatorDirection = 'previous' | 'next';
