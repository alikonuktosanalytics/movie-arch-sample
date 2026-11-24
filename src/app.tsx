import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { EmptyState, Sidebar } from '@/components/common';
import { buildRoute, ROUTES } from '@/lib/navigation/routes';
import { ActorDetailScreen, ActorListScreen } from '@/modules/ActorsModule';
import { MovieDetailScreen, MovieListScreen, WatchlistScreen } from '@/modules/MoviesModule';
import { CompanyCreateScreen, CompanyDetailScreen, CompanyListScreen } from '@/modules/ProductionCompanyModule';
import { EpisodeDetailScreen, SeasonsListScreen, SeriesListScreen } from '@/modules/SeriesModule';
import { NOT_FOUND } from './const';
import { styles } from './style';

const AppLayout = () => (
  <div className="app-shell">
    <Sidebar />
    <main className="app-main" style={styles.main}>
      <Outlet />
    </main>
  </div>
);

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <EmptyState
      icon={NOT_FOUND.icon}
      title={NOT_FOUND.title}
      description={NOT_FOUND.description}
      actionLabel={NOT_FOUND.actionLabel}
      onAction={() => navigate(buildRoute.movies())}
    />
  );
};

/** The router only knows each module's public API (modules/<Module>/index.ts). */
export const App = () => (
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to={ROUTES.movies} replace />} />

        <Route path={ROUTES.movies} element={<MovieListScreen />} />
        <Route path={ROUTES.movieDetail} element={<MovieDetailScreen />} />
        <Route path={ROUTES.watchlist} element={<WatchlistScreen />} />

        <Route path={ROUTES.actors} element={<ActorListScreen />} />
        <Route path={ROUTES.actorDetail} element={<ActorDetailScreen />} />

        <Route path={ROUTES.series} element={<SeriesListScreen />} />
        <Route path={ROUTES.seriesSeasons} element={<SeasonsListScreen />} />
        <Route path={ROUTES.episodeDetail} element={<EpisodeDetailScreen />} />

        <Route path={ROUTES.companies} element={<CompanyListScreen />} />
        <Route path={ROUTES.companyCreate} element={<CompanyCreateScreen />} />
        <Route path={ROUTES.companyDetail} element={<CompanyDetailScreen />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
