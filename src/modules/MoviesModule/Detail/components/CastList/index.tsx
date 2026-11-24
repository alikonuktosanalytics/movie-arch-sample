import { ActorCard } from '@/components/designSystem/Cards';
import { EMPTY_CAST, SECTION_TITLE } from './const';
import { getCastMemberSubtitle, getCastSummary } from './helpers';
import { styles } from './style';
import type { CastListProps } from './type';

export const CastList = ({ cast, onSelectActor }: CastListProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <section style={styles.container}>
      <h2 style={styles.title}>{SECTION_TITLE}</h2>
      <p style={styles.summary}>{cast.length > 0 ? getCastSummary(cast) : EMPTY_CAST}</p>
      <div style={styles.list}>
        {cast.map((actor) => (
          <ActorCard
            key={actor.id}
            name={actor.name}
            photoUrl={actor.photoUrl}
            subtitle={getCastMemberSubtitle(actor, currentYear)}
            onPress={() => onSelectActor(actor.id)}
          />
        ))}
      </div>
    </section>
  );
};
