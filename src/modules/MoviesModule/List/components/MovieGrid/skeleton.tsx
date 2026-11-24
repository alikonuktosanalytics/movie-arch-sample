import { PosterCardSkeleton } from '@/components/designSystem/Cards';
import { Skeleton } from '@/components/designSystem/Skeleton';
import { Grid } from '@/components/layout/Grid';
import { GRID_MIN_ITEM_WIDTH, SKELETON_ITEM_COUNT } from './const';
import { styles } from './style';

export const MovieGridSkeleton = () => (
  <div style={styles.container}>
    <Skeleton width={120} height={14} />
    <Grid minItemWidth={GRID_MIN_ITEM_WIDTH}>
      {Array.from({ length: SKELETON_ITEM_COUNT }, (_, index) => (
        <PosterCardSkeleton key={index} />
      ))}
    </Grid>
  </div>
);
