import { Button } from '@/components/designSystem/Button';
import { BACK_TO_SEASON_LABEL } from '../../const';
import { DIRECTION_LABELS } from './const';
import { getNavigatorText } from './helpers';
import { styles } from './style';
import type { EpisodeNavigatorProps } from './type';

export const EpisodeNavigator = ({ previous, next, onNavigate, onBackToSeason }: EpisodeNavigatorProps) => (
  <nav style={styles.container} aria-label="Episode navigation">
    <button
      type="button"
      className="tappable"
      style={styles.card}
      disabled={!previous}
      onClick={() => previous && onNavigate(previous.id)}
    >
      <span style={styles.direction}>← {DIRECTION_LABELS.previous}</span>
      <span style={styles.text}>{getNavigatorText('previous', previous)}</span>
    </button>
    <button
      type="button"
      className="tappable"
      style={{ ...styles.card, ...styles.cardNext }}
      disabled={!next}
      onClick={() => next && onNavigate(next.id)}
    >
      <span style={styles.direction}>{DIRECTION_LABELS.next} →</span>
      <span style={styles.text}>{getNavigatorText('next', next)}</span>
    </button>
    <div style={styles.footer}>
      <Button label={BACK_TO_SEASON_LABEL} variant="secondary" onPress={onBackToSeason} />
    </div>
  </nav>
);
