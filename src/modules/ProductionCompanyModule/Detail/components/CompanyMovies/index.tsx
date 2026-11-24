import { EmptyState } from '@/components/common';
import { MovieCard } from '@/components/designSystem/Cards';
import { Grid } from '@/components/layout/Grid';
import { EMPTY_DESCRIPTION, EMPTY_ICON, EMPTY_TITLE, GRID_MIN_ITEM_WIDTH, SECTION_TITLE } from './const';
import { sortCompanyMovies } from './helpers';
import { styles } from './style';
import type { CompanyMoviesProps } from './type';

export const CompanyMovies = ({ movies, onSelectMovie }: CompanyMoviesProps) => (
  <section style={styles.container}>
    <h2 style={styles.title}>{SECTION_TITLE}</h2>
    {movies.length === 0 ? (
      <EmptyState icon={EMPTY_ICON} title={EMPTY_TITLE} description={EMPTY_DESCRIPTION} />
    ) : (
      <Grid minItemWidth={GRID_MIN_ITEM_WIDTH}>
        {sortCompanyMovies(movies).map((movie) => (
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
    )}
  </section>
);
