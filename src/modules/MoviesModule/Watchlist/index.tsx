import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AsyncContent, EmptyState, PageHeader } from '@/components/common';
import { Button } from '@/components/designSystem/Button';
import { useAsync } from '@/lib/hooks/useAsync';
import { buildRoute } from '@/lib/navigation/routes';
import { getMoviesByIds } from '@/lib/services/movies';
import { useWatchlistStore } from '@/store/watchlistStore';
import { ClearWatchlistSheet, WatchlistItem, WatchlistSummary } from './components';
import { CLEAR_LABEL, EMPTY_ACTION, EMPTY_DESCRIPTION, EMPTY_ICON, EMPTY_TITLE, SCREEN_SUBTITLE, SCREEN_TITLE } from './const';
import { getWatchlistTotals, selectWatchlistMovies } from './helpers';
import { WatchlistSkeleton } from './skeleton';
import { styles } from './style';

export const WatchlistScreen = () => {
  const navigate = useNavigate();
  const movieIds = useWatchlistStore((state) => state.movieIds);
  const removeMovie = useWatchlistStore((state) => state.remove);
  const clearWatchlist = useWatchlistStore((state) => state.clear);
  const [isClearSheetOpen, setClearSheetOpen] = useState(false);

  // Fetch once on mount; removals are applied locally via selectWatchlistMovies.
  const moviesState = useAsync(() => getMoviesByIds(movieIds), []);

  const confirmClear = () => {
    clearWatchlist();
    setClearSheetOpen(false);
  };

  return (
    <div style={styles.screen}>
      <PageHeader
        title={SCREEN_TITLE}
        subtitle={SCREEN_SUBTITLE}
        actions={
          movieIds.length > 0 && <Button label={CLEAR_LABEL} variant="danger" onPress={() => setClearSheetOpen(true)} />
        }
      />
      <AsyncContent state={moviesState} skeleton={<WatchlistSkeleton />}>
        {(fetchedMovies) => {
          const movies = selectWatchlistMovies(fetchedMovies, movieIds);
          if (movies.length === 0) {
            return (
              <EmptyState
                icon={EMPTY_ICON}
                title={EMPTY_TITLE}
                description={EMPTY_DESCRIPTION}
                actionLabel={EMPTY_ACTION}
                onAction={() => navigate(buildRoute.movies())}
              />
            );
          }
          return (
            <>
              <WatchlistSummary totals={getWatchlistTotals(movies)} />
              <div style={styles.list}>
                {movies.map((movie) => (
                  <WatchlistItem
                    key={movie.id}
                    movie={movie}
                    onOpen={() => navigate(buildRoute.movieDetail(movie.id))}
                    onRemove={() => removeMovie(movie.id)}
                  />
                ))}
              </div>
            </>
          );
        }}
      </AsyncContent>
      <ClearWatchlistSheet
        visible={isClearSheetOpen}
        count={movieIds.length}
        onConfirm={confirmClear}
        onCancel={() => setClearSheetOpen(false)}
      />
    </div>
  );
};
