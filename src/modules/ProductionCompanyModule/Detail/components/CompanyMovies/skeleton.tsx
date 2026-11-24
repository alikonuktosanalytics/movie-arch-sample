import { PosterCardSkeleton } from '@/components/designSystem/Cards';
import { Skeleton } from '@/components/designSystem/Skeleton';
import { Grid } from '@/components/layout/Grid';
import { GRID_MIN_ITEM_WIDTH, SKELETON_ITEM_COUNT } from './const';
import { styles } from './style';

export const CompanyMoviesSkeleton = () => (
  <div style={styles.container}>
    <Skeleton width={100} height={20} />
    <Grid minItemWidth={GRID_MIN_ITEM_WIDTH}>
      {Array.from({ length: SKELETON_ITEM_COUNT }, (_, index) => (
        <PosterCardSkeleton key={index} />
      ))}
    </Grid>
  </div>
);
