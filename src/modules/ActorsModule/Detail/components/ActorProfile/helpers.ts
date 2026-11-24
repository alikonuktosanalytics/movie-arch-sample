import type { Actor, Movie } from '@/lib/types';
import { FACT_LABELS, NO_VALUE } from './const';
import type { ProfileFact } from './type';

export const getAge = (birthYear: number, currentYear: number): number => Math.max(0, currentYear - birthYear);

/** "2006–2023" based on the movies in the dataset, "2019" for one year, "—" for none. */
export const getCareerSpan = (movies: Pick<Movie, 'year'>[]): string => {
  if (movies.length === 0) return NO_VALUE;
  const years = movies.map((movie) => movie.year);
  const first = Math.min(...years);
  const last = Math.max(...years);
  return first === last ? String(first) : `${first}–${last}`;
};

export const buildProfileFacts = (
  actor: Pick<Actor, 'birthYear' | 'birthPlace'>,
  movies: Pick<Movie, 'year'>[],
  currentYear: number,
): ProfileFact[] => [
  { label: FACT_LABELS.born, value: `${actor.birthYear}, ${actor.birthPlace}` },
  { label: FACT_LABELS.age, value: String(getAge(actor.birthYear, currentYear)) },
  { label: FACT_LABELS.movies, value: String(movies.length) },
  { label: FACT_LABELS.career, value: getCareerSpan(movies) },
];
