export type SeasonsListParams = {
  seriesId: string;
};

export interface SeasonStats {
  episodeCount: number;
  /** Minutes */
  totalRuntime: number;
  averageRating: number;
}
