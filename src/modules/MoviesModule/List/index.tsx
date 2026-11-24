import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AsyncContent, EmptyState, PageHeader } from '@/components/common';
import { useAsync } from '@/lib/hooks/useAsync';
import { buildRoute } from '@/lib/navigation/routes';
import { getMovies } from '@/lib/services/movies';
import { MovieFilterBar, MovieGrid } from './components';
import { EMPTY_ACTION, EMPTY_DESCRIPTION, EMPTY_ICON, EMPTY_TITLE, INITIAL_FILTERS, SCREEN_SUBTITLE, SCREEN_TITLE } from './const';
import { applyMovieFilters, getAvailableGenres } from './helpers';
import { MovieListSkeleton } from './skeleton';
import { styles } from './style';
import type { MovieFilters } from './type';

export const MovieListScreen = () => {
  const navigate = useNavigate();
  const moviesState = useAsync(getMovies, []);
  const [filters, setFilters] = useState<MovieFilters>(INITIAL_FILTERS);
  const resetFilters = () => setFilters(INITIAL_FILTERS);

  return (
    <div style={styles.screen}>
      <PageHeader title={SCREEN_TITLE} subtitle={SCREEN_SUBTITLE} />
      <AsyncContent state={moviesState} skeleton={<MovieListSkeleton />}>
        {(movies) => {
          const visibleMovies = applyMovieFilters(movies, filters);
          return (
            <>
              <MovieFilterBar
                filters={filters}
                genres={getAvailableGenres(movies)}
                onChange={setFilters}
                onReset={resetFilters}
              />
              {visibleMovies.length === 0 ? (
                <EmptyState
                  icon={EMPTY_ICON}
                  title={EMPTY_TITLE}
                  description={EMPTY_DESCRIPTION}
                  actionLabel={EMPTY_ACTION}
                  onAction={resetFilters}
                />
              ) : (
                <MovieGrid
                  movies={visibleMovies}
                  totalCount={movies.length}
                  onSelectMovie={(movieId) => navigate(buildRoute.movieDetail(movieId))}
                />
              )}
            </>
          );
        }}
      </AsyncContent>
    </div>
  );
};
