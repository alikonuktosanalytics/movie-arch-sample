import { WatchlistItemSkeleton, WatchlistSummarySkeleton } from './components';
import { SKELETON_ROWS } from './const';
import { styles } from './style';

export const WatchlistSkeleton = () => (
  <div style={styles.screen}>
    <WatchlistSummarySkeleton />
    <div style={styles.list}>
      {Array.from({ length: SKELETON_ROWS }, (_, index) => (
        <WatchlistItemSkeleton key={index} />
      ))}
    </div>
  </div>
);
