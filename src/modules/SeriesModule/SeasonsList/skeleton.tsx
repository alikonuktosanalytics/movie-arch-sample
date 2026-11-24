import { Skeleton } from '@/components/designSystem/Skeleton';
import { EpisodeListSkeleton, SeasonTabsSkeleton } from './components';
import { styles } from './style';

export const SeasonsListSkeleton = () => (
  <div style={styles.screen}>
    <Skeleton width={240} height={14} />
    <Skeleton width="40%" height={32} />
    <Skeleton width="70%" height={14} />
    <div style={styles.seasonPanel}>
      <SeasonTabsSkeleton />
      <EpisodeListSkeleton />
    </div>
  </div>
);
