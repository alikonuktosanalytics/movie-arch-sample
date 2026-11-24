import { Poster } from '../Artwork';
import { Badge } from '../Badge';
import { styles } from './style';
import type { SeriesCardProps } from './type';

export const SeriesCard = ({ title, posterUrl, years, rating, seasonsLabel, network, onPress }: SeriesCardProps) => (
  <button type="button" className="pressable" onClick={onPress} style={styles.posterCard}>
    <Poster title={title} imageUrl={posterUrl} showCaption />
    <div style={styles.body}>
      <h3 style={styles.title}>{title}</h3>
      <span style={styles.meta}>
        {years} · <span style={styles.rating}>★ {rating.toFixed(1)}</span>
      </span>
      <div style={styles.footer}>
        <Badge label={seasonsLabel} tone="info" />
        {network && <Badge label={network} />}
      </div>
    </div>
  </button>
);
