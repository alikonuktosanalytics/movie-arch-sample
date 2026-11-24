import { Skeleton } from '@/components/designSystem/Skeleton';
import { radius } from '@/components/designSystem/theme';
import { THUMBNAIL_WIDTH } from './const';
import { styles } from './style';

export const WatchlistItemSkeleton = () => (
  <div style={styles.row}>
    <Skeleton width={THUMBNAIL_WIDTH} aspectRatio="2 / 3" radius={radius.sm} />
    <div style={{ ...styles.texts, flex: 1 }}>
      <Skeleton width="40%" height={16} />
      <Skeleton width="65%" height={12} />
    </div>
  </div>
);
