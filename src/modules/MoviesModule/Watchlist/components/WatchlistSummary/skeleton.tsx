import { Skeleton } from '@/components/designSystem/Skeleton';
import { SUMMARY_LABELS } from './const';
import { styles } from './style';

export const WatchlistSummarySkeleton = () => (
  <div style={styles.container}>
    {Object.keys(SUMMARY_LABELS).map((key) => (
      <div key={key} style={styles.tile}>
        <Skeleton width="50%" height={12} />
        <Skeleton width="70%" height={28} />
      </div>
    ))}
  </div>
);
