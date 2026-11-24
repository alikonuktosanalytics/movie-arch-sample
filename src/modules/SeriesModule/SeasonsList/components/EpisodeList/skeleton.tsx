import { Skeleton } from '@/components/designSystem/Skeleton';
import { SKELETON_ROW_COUNT } from './const';
import { styles } from './style';

export const EpisodeListSkeleton = () => (
  <div style={styles.list}>
    {Array.from({ length: SKELETON_ROW_COUNT }, (_, index) => (
      <div key={index} style={styles.row}>
        <Skeleton width={56} height={12} />
        <div style={styles.texts}>
          <Skeleton width="45%" height={14} />
          <Skeleton width="30%" height={12} />
        </div>
      </div>
    ))}
  </div>
);
