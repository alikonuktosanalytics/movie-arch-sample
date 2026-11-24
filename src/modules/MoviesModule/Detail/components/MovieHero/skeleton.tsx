import { Skeleton } from '@/components/designSystem/Skeleton';
import { radius } from '@/components/designSystem/theme';
import { POSTER_WIDTH } from './const';
import { styles } from './style';

export const MovieHeroSkeleton = () => (
  <div style={styles.container}>
    <div style={styles.posterWrapper}>
      <Skeleton width={POSTER_WIDTH} aspectRatio="2 / 3" radius={radius.md} />
    </div>
    <div style={styles.content}>
      <Skeleton width="60%" height={36} />
      <Skeleton width="40%" height={14} />
      <Skeleton width="90%" height={14} />
      <Skeleton width="75%" height={14} />
      <Skeleton width={170} height={40} radius={radius.pill} />
    </div>
  </div>
);
