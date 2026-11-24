/**
 * Single source of truth for URLs.
 * Modules never import each other's screens; they navigate with `buildRoute.*` (routes.ts).
 */
export const ROUTES = {
  movies: '/movies',
  movieDetail: '/movies/:movieId',
  watchlist: '/watchlist',
  actors: '/actors',
  actorDetail: '/actors/:actorId',
  series: '/series',
  seriesSeasons: '/series/:seriesId',
  episodeDetail: '/series/:seriesId/episodes/:episodeId',
  companies: '/companies',
  companyCreate: '/companies/new',
  companyDetail: '/companies/:companyId',
} as const;
