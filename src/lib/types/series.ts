import type { Genre } from './movie';

export interface Episode {
  id: string;
  number: number;
  title: string;
  /** Runtime in minutes */
  runtime: number;
  /** ISO date, e.g. 2008-01-20 */
  airDate: string;
  rating: number;
  overview: string;
}

export interface Season {
  number: number;
  year: number;
  /** Season poster (2:3). */
  posterUrl?: string;
  episodes: Episode[];
}

export interface Series {
  id: string;
  title: string;
  /** Series poster (2:3), same as its first season's poster. */
  posterUrl?: string;
  network: string;
  startYear: number;
  /** null = still running */
  endYear: number | null;
  genres: Genre[];
  rating: number;
  overview: string;
  seasons: Season[];
}

export interface EpisodeDetail {
  series: Series;
  season: Season;
  episode: Episode;
}
