import type { Actor } from './actor';
import type { Company } from './company';

export type Genre =
  | 'Action'
  | 'Adventure'
  | 'Comedy'
  | 'Crime'
  | 'Drama'
  | 'Fantasy'
  | 'Horror'
  | 'Mystery'
  | 'Sci-Fi'
  | 'Thriller';

export interface Movie {
  id: string;
  title: string;
  /** Remote poster image (2:3). Optional: Poster falls back to a generated gradient. */
  posterUrl?: string;
  year: number;
  /** Runtime in minutes */
  runtime: number;
  genres: Genre[];
  rating: number;
  director: string;
  overview: string;
  /** Billing order matters: first id = top billed actor */
  castIds: string[];
  companyId: string;
}

export interface MovieDetail {
  movie: Movie;
  cast: Actor[];
  company: Company | null;
}
