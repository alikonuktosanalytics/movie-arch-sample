import { Skeleton } from '@/components/designSystem/Skeleton';
import { styles } from './style';

export const EpisodeNavigatorSkeleton = () => (
  <div style={styles.container}>
    {[0, 1].map((index) => (
      <div key={index} style={styles.card}>
        <Skeleton width={70} height={12} />
        <Skeleton width="70%" height={14} />
      </div>
    ))}
  </div>
);
