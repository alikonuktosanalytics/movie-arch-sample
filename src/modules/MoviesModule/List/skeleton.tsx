import { MovieFilterBarSkeleton, MovieGridSkeleton } from './components';
import { styles } from './style';

export const MovieListSkeleton = () => (
  <div style={styles.screen}>
    <MovieFilterBarSkeleton />
    <MovieGridSkeleton />
  </div>
);
