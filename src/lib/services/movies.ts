import { isDefined } from '@/lib/helpers/array';
import { actorsTable, companiesTable, moviesTable } from '@/lib/mocks';
import type { Movie, MovieDetail } from '@/lib/types';
import { mockFailure, mockRequest, NotFoundError } from './client';

export const getMovies = (): Promise<Movie[]> => mockRequest(moviesTable);

/** Keeps the order of `ids`; unknown ids are skipped. */
export const getMoviesByIds = (ids: string[]): Promise<Movie[]> =>
  mockRequest(ids.map((id) => moviesTable.find((movie) => movie.id === id)).filter(isDefined));

export const getMovieDetail = (movieId: string): Promise<MovieDetail> => {
  const movie = moviesTable.find((item) => item.id === movieId);
  if (!movie) return mockFailure(new NotFoundError('Movie', movieId));

  return mockRequest({
    movie,
    cast: actorsTable.filter((actor) => movie.castIds.includes(actor.id)),
    company: companiesTable.find((company) => company.id === movie.companyId) ?? null,
  });
};
