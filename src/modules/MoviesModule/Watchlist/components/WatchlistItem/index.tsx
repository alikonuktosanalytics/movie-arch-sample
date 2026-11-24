import { Poster } from '@/components/designSystem/Artwork';
import { Button } from '@/components/designSystem/Button';
import { REMOVE_LABEL, THUMBNAIL_WIDTH } from './const';
import { formatWatchlistItemMeta } from './helpers';
import { styles } from './style';
import type { WatchlistItemProps } from './type';

export const WatchlistItem = ({ movie, onOpen, onRemove }: WatchlistItemProps) => (
  <div style={styles.row}>
    <button type="button" className="tappable" style={styles.main} onClick={onOpen}>
      <Poster title={movie.title} imageUrl={movie.posterUrl} width={THUMBNAIL_WIDTH} />
      <span style={styles.texts}>
        <span style={styles.title}>{movie.title}</span>
        <span style={styles.meta}>{formatWatchlistItemMeta(movie)}</span>
      </span>
    </button>
    <Button label={REMOVE_LABEL} variant="ghost" size="small" onPress={onRemove} />
  </div>
);
