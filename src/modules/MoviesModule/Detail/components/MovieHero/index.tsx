import { Poster } from '@/components/designSystem/Artwork';
import { Badge } from '@/components/designSystem/Badge';
import { Button } from '@/components/designSystem/Button';
import { formatRating } from '@/lib/helpers/formatters';
import { POSTER_WIDTH, RATING_ICON } from './const';
import { formatMovieMeta, getRatingTone, getWatchlistAction } from './helpers';
import { styles } from './style';
import type { MovieHeroProps } from './type';

export const MovieHero = ({ movie, isInWatchlist, onToggleWatchlist }: MovieHeroProps) => {
  const action = getWatchlistAction(isInWatchlist);

  return (
    <section style={styles.container}>
      <div style={styles.posterWrapper}>
        <Poster title={movie.title} imageUrl={movie.posterUrl} width={POSTER_WIDTH} />
      </div>
      <div style={styles.content}>
        <h1 style={styles.title}>{movie.title}</h1>
        <span style={styles.meta}>{formatMovieMeta(movie)}</span>
        <p style={styles.overview}>{movie.overview}</p>
        <div style={styles.actions}>
          <Button label={action.label} icon={action.icon} variant={action.variant} onPress={onToggleWatchlist} />
          <Badge label={formatRating(movie.rating)} icon={RATING_ICON} tone={getRatingTone(movie.rating)} />
        </div>
      </div>
    </section>
  );
};
