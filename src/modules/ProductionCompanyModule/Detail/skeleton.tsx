import { CompanyHeaderSkeleton, CompanyMoviesSkeleton } from './components';
import { styles } from './style';

export const CompanyDetailSkeleton = () => (
  <div style={styles.screen}>
    <CompanyHeaderSkeleton />
    <CompanyMoviesSkeleton />
  </div>
);
