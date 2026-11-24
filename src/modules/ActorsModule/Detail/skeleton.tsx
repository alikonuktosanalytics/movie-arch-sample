import { ActorProfileSkeleton, FilmographySkeleton } from './components';
import { styles } from './style';

export const ActorDetailSkeleton = () => (
  <div style={styles.screen}>
    <ActorProfileSkeleton />
    <FilmographySkeleton />
  </div>
);
