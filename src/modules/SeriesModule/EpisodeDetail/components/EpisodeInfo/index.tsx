import { getGradient } from '@/components/designSystem/Artwork';
import { buildEpisodeFacts } from './helpers';
import { styles } from './style';
import type { EpisodeInfoProps } from './type';

export const EpisodeInfo = ({ seriesTitle, episode, code }: EpisodeInfoProps) => (
  <section style={styles.container}>
    <div style={{ ...styles.still, background: getGradient(episode.title) }} aria-hidden>
      {code}
    </div>
    <div style={styles.content}>
      <span style={styles.eyebrow}>
        {seriesTitle} · {code}
      </span>
      <h1 style={styles.title}>{episode.title}</h1>
      <p style={styles.overview}>{episode.overview}</p>
      <div style={styles.facts}>
        {buildEpisodeFacts(episode).map((fact) => (
          <div key={fact.label} style={styles.fact}>
            <span style={styles.factLabel}>{fact.label}</span>
            <span style={styles.factValue}>{fact.value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
