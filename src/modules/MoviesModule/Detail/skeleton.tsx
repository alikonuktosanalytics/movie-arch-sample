import { CastListSkeleton, MovieHeroSkeleton, ProductionInfoSkeleton } from './components';
import { styles } from './style';

export const MovieDetailSkeleton = () => (
  <div style={styles.screen}>
    <MovieHeroSkeleton />
    <div style={styles.columns}>
      <CastListSkeleton />
      <ProductionInfoSkeleton />
    </div>
  </div>
);
