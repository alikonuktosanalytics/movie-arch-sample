import { CompanyCard } from '@/components/designSystem/Cards';
import { Grid } from '@/components/layout/Grid';
import { GRID_MIN_ITEM_WIDTH, USER_CREATED_BADGE } from './const';
import { getCompanySubtitle } from './helpers';
import { styles } from './style';
import type { CompanyGridProps } from './type';

export const CompanyGrid = ({ rows, onSelectCompany }: CompanyGridProps) => (
  <section style={styles.container}>
    <Grid minItemWidth={GRID_MIN_ITEM_WIDTH}>
      {rows.map(({ company, movieCount }) => (
        <CompanyCard
          key={company.id}
          name={company.name}
          logoUrl={company.logoUrl}
          subtitle={getCompanySubtitle(company, movieCount)}
          badge={company.isUserCreated ? USER_CREATED_BADGE : undefined}
          onPress={() => onSelectCompany(company.id)}
        />
      ))}
    </Grid>
  </section>
);
