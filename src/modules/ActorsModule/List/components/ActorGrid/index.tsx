import { ActorCard } from '@/components/designSystem/Cards';
import { Grid } from '@/components/layout/Grid';
import { GRID_MIN_ITEM_WIDTH } from './const';
import { getActorSubtitle } from './helpers';
import { styles } from './style';
import type { ActorGridProps } from './type';

export const ActorGrid = ({ actors, onSelectActor }: ActorGridProps) => (
  <section style={styles.container}>
    <Grid minItemWidth={GRID_MIN_ITEM_WIDTH}>
      {actors.map((actor) => (
        <ActorCard key={actor.id} name={actor.name} photoUrl={actor.photoUrl} subtitle={getActorSubtitle(actor)} onPress={() => onSelectActor(actor.id)} />
      ))}
    </Grid>
  </section>
);
