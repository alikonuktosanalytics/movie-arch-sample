import { EmptyState } from '@/components/common';
import { Badge } from '@/components/designSystem/Badge';
import { formatEpisodeCode } from '../../../helpers';
import { EMPTY_EPISODES } from './const';
import { formatEpisodeRowMeta, getTopRatedEpisodeIds } from './helpers';
import { styles } from './style';
import type { EpisodeListProps } from './type';

export const EpisodeList = ({ seasonNumber, episodes, onSelectEpisode }: EpisodeListProps) => {
  if (episodes.length === 0) return <EmptyState title={EMPTY_EPISODES} />;
  const topRatedIds = getTopRatedEpisodeIds(episodes);

  return (
    <ol style={styles.list}>
      {episodes.map((episode) => (
        <li key={episode.id}>
          <button type="button" className="tappable" style={styles.row} onClick={() => onSelectEpisode(episode.id)}>
            <span style={styles.code}>{formatEpisodeCode(seasonNumber, episode.number)}</span>
            <span style={styles.texts}>
              <span style={styles.title}>{episode.title}</span>
              <span style={styles.meta}>{formatEpisodeRowMeta(episode)}</span>
            </span>
            {topRatedIds.has(episode.id) && <Badge label="Top rated" tone="success" />}
            <span style={styles.chevron} aria-hidden>
              ›
            </span>
          </button>
        </li>
      ))}
    </ol>
  );
};
