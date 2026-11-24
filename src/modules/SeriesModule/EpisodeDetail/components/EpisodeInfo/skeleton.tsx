import { Skeleton } from '@/components/designSystem/Skeleton';
import { radius } from '@/components/designSystem/theme';
import { styles } from './style';

export const EpisodeInfoSkeleton = () => (
  <div style={styles.container}>
    <div style={{ flex: '0 1 320px' }}>
      <Skeleton aspectRatio="16 / 9" radius={radius.md} />
    </div>
    <div style={styles.content}>
      <Skeleton width={160} height={12} />
      <Skeleton width="60%" height={28} />
      <Skeleton width="90%" height={14} />
      <Skeleton width="50%" height={32} />
    </div>
  </div>
);
