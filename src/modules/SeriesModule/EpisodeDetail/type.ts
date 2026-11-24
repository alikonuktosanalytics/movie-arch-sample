export type EpisodeDetailParams = {
  seriesId: string;
  episodeId: string;
};

/** Lightweight pointer to a neighbouring episode (may live in another season). */
export interface EpisodeRef {
  id: string;
  title: string;
  code: string;
}

export interface AdjacentEpisodes {
  previous: EpisodeRef | null;
  next: EpisodeRef | null;
}
