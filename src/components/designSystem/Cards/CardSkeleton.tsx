import { Skeleton } from '../Skeleton';
import { radius } from '../theme';
import { POSTER_ASPECT_RATIO, ROW_CARD_AVATAR_SIZE } from './const';
import { styles } from './style';

/** Skeleton twin of MovieCard / SeriesCard. */
export const PosterCardSkeleton = () => (
  <div style={styles.posterCard}>
    <Skeleton aspectRatio={POSTER_ASPECT_RATIO} radius={radius.md} />
    <div style={styles.body}>
      <Skeleton width="80%" height={14} />
      <Skeleton width="50%" height={12} />
    </div>
  </div>
);

/** Skeleton twin of ActorCard / CompanyCard. */
export const RowCardSkeleton = () => (
  <div style={styles.rowCard}>
    <Skeleton width={ROW_CARD_AVATAR_SIZE} height={ROW_CARD_AVATAR_SIZE} radius={radius.pill} />
    <div style={styles.rowBody}>
      <Skeleton width="70%" height={14} />
      <Skeleton width="45%" height={12} />
    </div>
  </div>
);
