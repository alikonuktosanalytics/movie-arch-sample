import { Skeleton } from '@/components/designSystem/Skeleton';
import { EpisodeInfoSkeleton, EpisodeNavigatorSkeleton } from './components';
import { styles } from './style';

export const EpisodeDetailSkeleton = () => (
  <div style={styles.screen}>
    <Skeleton width={320} height={14} />
    <EpisodeInfoSkeleton />
    <EpisodeNavigatorSkeleton />
  </div>
);
