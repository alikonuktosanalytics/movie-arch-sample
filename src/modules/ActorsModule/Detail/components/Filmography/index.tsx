import { EmptyState } from '@/components/common';
import { MovieCard } from '@/components/designSystem/Cards';
import { Grid } from '@/components/layout/Grid';
import { EMPTY_TITLE, GRID_MIN_ITEM_WIDTH, SECTION_TITLE } from './const';
import { groupByDecade } from './helpers';
import { styles } from './style';
import type { FilmographyProps } from './type';

export const Filmography = ({ movies, onSelectMovie }: FilmographyProps) => (
  <section style={styles.container}>
    <h2 style={styles.title}>{SECTION_TITLE}</h2>
    {movies.length === 0 && <EmptyState title={EMPTY_TITLE} />}
    {groupByDecade(movies).map((group) => (
      <div key={group.decade} style={styles.group}>
        <h3 style={styles.decade}>{group.decade}</h3>
        <Grid minItemWidth={GRID_MIN_ITEM_WIDTH}>
          {group.movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              year={movie.year}
              rating={movie.rating}
              onPress={() => onSelectMovie(movie.id)}
            />
          ))}
        </Grid>
      </div>
    ))}
  </section>
);
