import { SeriesCard } from '@/components/designSystem/Cards';
import { Grid } from '@/components/layout/Grid';
import { GRID_MIN_ITEM_WIDTH } from './const';
import { getSeriesCardMeta } from './helpers';
import { styles } from './style';
import type { SeriesGridProps } from './type';

export const SeriesGrid = ({ seriesList, onSelectSeries }: SeriesGridProps) => (
  <section style={styles.container}>
    <Grid minItemWidth={GRID_MIN_ITEM_WIDTH}>
      {seriesList.map((series) => {
        const meta = getSeriesCardMeta(series);
        return (
          <SeriesCard
            key={series.id}
            title={series.title}
            posterUrl={series.posterUrl}
            years={meta.years}
            seasonsLabel={meta.seasonsLabel}
            rating={series.rating}
            network={series.network}
            onPress={() => onSelectSeries(series.id)}
          />
        );
      })}
    </Grid>
  </section>
);
