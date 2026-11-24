import { RowCardSkeleton } from '@/components/designSystem/Cards';
import { Skeleton } from '@/components/designSystem/Skeleton';
import { SKELETON_ROW_COUNT } from './const';
import { styles } from './style';

export const CastListSkeleton = () => (
  <div style={styles.container}>
    <Skeleton width={80} height={20} />
    <div style={styles.list}>
      {Array.from({ length: SKELETON_ROW_COUNT }, (_, index) => (
        <RowCardSkeleton key={index} />
      ))}
    </div>
  </div>
);
