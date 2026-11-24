import { MovieCard } from '@/components/designSystem/Cards';
import { Grid } from '@/components/layout/Grid';
import { GRID_MIN_ITEM_WIDTH } from './const';
import { getResultLabel } from './helpers';
import { styles } from './style';
import type { MovieGridProps } from './type';

export const MovieGrid = ({ movies, totalCount, onSelectMovie }: MovieGridProps) => (
  <section style={styles.container}>
    <span style={styles.resultLabel}>{getResultLabel(movies.length, totalCount)}</span>
    <Grid minItemWidth={GRID_MIN_ITEM_WIDTH}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterUrl={movie.posterUrl}
          year={movie.year}
          rating={movie.rating}
          genres={movie.genres}
          onPress={() => onSelectMovie(movie.id)}
        />
      ))}
    </Grid>
  </section>
);
