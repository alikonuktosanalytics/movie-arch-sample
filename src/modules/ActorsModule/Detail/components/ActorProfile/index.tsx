import { Avatar } from '@/components/designSystem/Artwork';
import { AVATAR_SIZE } from './const';
import { buildProfileFacts } from './helpers';
import { styles } from './style';
import type { ActorProfileProps } from './type';

export const ActorProfile = ({ actor, movies, currentYear }: ActorProfileProps) => (
  <section style={styles.container}>
    <Avatar name={actor.name} imageUrl={actor.photoUrl} size={AVATAR_SIZE} />
    <div style={styles.content}>
      <h1 style={styles.name}>{actor.name}</h1>
      <p style={styles.bio}>{actor.bio}</p>
      <div style={styles.facts}>
        {buildProfileFacts(actor, movies, currentYear).map((fact) => (
          <div key={fact.label} style={styles.fact}>
            <span style={styles.factLabel}>{fact.label}</span>
            <span style={styles.factValue}>{fact.value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
