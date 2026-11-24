import { describe, expect, it } from 'vitest';
import { getActorDetail } from '../actors';
import { NotFoundError } from '../client';
import { getMovieDetail, getMoviesByIds } from '../movies';
import { getEpisodeDetail } from '../series';

describe('services (mock-backed)', () => {
  it('getMovieDetail joins cast and company by id references', async () => {
    const detail = await getMovieDetail('m1');
    expect(detail.movie.title).toBe('Inception');
    expect(detail.company?.id).toBe('c1');
    expect(detail.cast.map((actor) => actor.id).sort()).toEqual(['a1', 'a4', 'a5', 'a9']);
  });

  it('rejects with NotFoundError for unknown ids', async () => {
    await expect(getMovieDetail('nope')).rejects.toBeInstanceOf(NotFoundError);
    await expect(getEpisodeDetail('s1', 'nope')).rejects.toBeInstanceOf(NotFoundError);
  });

  it('getMoviesByIds keeps the requested order and skips unknown ids', async () => {
    const movies = await getMoviesByIds(['m3', 'missing', 'm1']);
    expect(movies.map((movie) => movie.id)).toEqual(['m3', 'm1']);
  });

  it('getActorDetail returns every movie the actor appears in', async () => {
    const { movies } = await getActorDetail('a9');
    expect(movies).toHaveLength(5);
  });

  it('returns copies, so callers cannot mutate the mock tables', async () => {
    const first = await getMovieDetail('m2');
    first.movie.title = 'Mutated';
    const second = await getMovieDetail('m2');
    expect(second.movie.title).toBe('Interstellar');
  });
});
