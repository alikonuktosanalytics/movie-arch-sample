import { useNavigate, useParams } from 'react-router-dom';
import { AsyncContent, BackButton } from '@/components/common';
import { useAsync } from '@/lib/hooks/useAsync';
import { buildRoute } from '@/lib/navigation/routes';
import { getCompanyDetail } from '@/lib/services/companies';
import type { CompanyDetail } from '@/lib/types';
import { selectCreatedCompany, useCompanyStore } from '@/store/companyStore';
import { CompanyHeader, CompanyMovies } from './components';
import { BACK_LABEL } from './const';
import { getCompanyStats } from './helpers';
import { CompanyDetailSkeleton } from './skeleton';
import { styles } from './style';
import type { CompanyDetailParams } from './type';

export const CompanyDetailScreen = () => {
  const { companyId = '' } = useParams<CompanyDetailParams>();
  const navigate = useNavigate();
  const createdCompany = useCompanyStore(selectCreatedCompany(companyId));

  // Companies created in-app only exist in the store, so they skip the "API".
  const detailState = useAsync<CompanyDetail>(
    () => (createdCompany ? Promise.resolve({ company: createdCompany, movies: [] }) : getCompanyDetail(companyId)),
    [companyId, createdCompany],
  );

  return (
    <div style={styles.screen}>
      <BackButton label={BACK_LABEL} onPress={() => navigate(buildRoute.companies())} />
      <AsyncContent state={detailState} skeleton={<CompanyDetailSkeleton />}>
        {({ company, movies }) => (
          <>
            <CompanyHeader company={company} stats={getCompanyStats(movies)} />
            <CompanyMovies movies={movies} onSelectMovie={(movieId) => navigate(buildRoute.movieDetail(movieId))} />
          </>
        )}
      </AsyncContent>
    </div>
  );
};
