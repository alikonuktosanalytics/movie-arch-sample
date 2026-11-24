import { Skeleton } from '@/components/designSystem/Skeleton';
import { radius } from '@/components/designSystem/theme';
import { SKELETON_TAB_COUNT } from './const';
import { styles } from './style';

export const SeasonTabsSkeleton = () => (
  <div style={styles.tabs}>
    {Array.from({ length: SKELETON_TAB_COUNT }, (_, index) => (
      <Skeleton key={index} width={130} height={36} radius={radius.pill} />
    ))}
  </div>
);
