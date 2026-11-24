import { ROUTES } from './const';

export { ROUTES } from './const';

/** URL builders: the only way modules navigate to each other. */

export const buildRoute = {
  movies: () => ROUTES.movies,
  movieDetail: (movieId: string) => `/movies/${movieId}`,
  watchlist: () => ROUTES.watchlist,
  actors: () => ROUTES.actors,
  actorDetail: (actorId: string) => `/actors/${actorId}`,
  series: () => ROUTES.series,
  seriesSeasons: (seriesId: string, seasonNumber?: number) =>
    seasonNumber === undefined ? `/series/${seriesId}` : `/series/${seriesId}?season=${seasonNumber}`,
  episodeDetail: (seriesId: string, episodeId: string) => `/series/${seriesId}/episodes/${episodeId}`,
  companies: () => ROUTES.companies,
  companyCreate: () => ROUTES.companyCreate,
  companyDetail: (companyId: string) => `/companies/${companyId}`,
};
