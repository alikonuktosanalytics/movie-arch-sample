import type { Movie } from '@/lib/types';
import type { DecadeGroup } from './type';

export const getDecadeLabel = (year: number): string => `${Math.floor(year / 10) * 10}s`;

/** Groups consecutive movies by decade, preserving the incoming (already sorted) order. */
export const groupByDecade = (movies: Movie[]): DecadeGroup[] =>
  movies.reduce<DecadeGroup[]>((groups, movie) => {
    const decade = getDecadeLabel(movie.year);
    const last = groups[groups.length - 1];
    if (last && last.decade === decade) {
      last.movies.push(movie);
    } else {
      groups.push({ decade, movies: [movie] });
    }
    return groups;
  }, []);
