/**
 * Typed "tables" over the raw JSON. ONLY `src/lib/services/*` may import from here.
 * When a real API arrives, this folder is deleted and services switch to HTTP calls.
 */
import type { Actor, Company, Movie, Series } from '@/lib/types';
import actorsJson from './actors.json';
import companiesJson from './companies.json';
import moviesJson from './movies.json';
import seriesJson from './series.json';

export const moviesTable = moviesJson as Movie[];
export const actorsTable = actorsJson as Actor[];
export const companiesTable = companiesJson as Company[];
export const seriesTable = seriesJson as Series[];
