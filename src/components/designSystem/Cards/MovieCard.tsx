import { Poster } from '../Artwork';
import { Badge } from '../Badge';
import { MAX_VISIBLE_GENRES } from './const';
import { styles } from './style';
import type { MovieCardProps } from './type';

/** Presentational only: receives primitives, knows nothing about services, store or routes. */
export const MovieCard = ({ title, posterUrl, year, rating, genres = [], onPress }: MovieCardProps) => (
  <button type="button" className="pressable" onClick={onPress} style={styles.posterCard}>
    <Poster title={title} imageUrl={posterUrl} />
    <div style={styles.body}>
      <h3 style={styles.title}>{title}</h3>
      <span style={styles.meta}>
        {year} · <span style={styles.rating}>★ {rating.toFixed(1)}</span>
      </span>
      {genres.length > 0 && (
        <div style={styles.footer}>
          {genres.slice(0, MAX_VISIBLE_GENRES).map((genre) => (
            <Badge key={genre} label={genre} />
          ))}
        </div>
      )}
    </div>
  </button>
);
