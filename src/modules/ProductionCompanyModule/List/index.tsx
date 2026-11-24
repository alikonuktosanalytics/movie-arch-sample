import { useNavigate } from 'react-router-dom';
import { AsyncContent, PageHeader } from '@/components/common';
import { Button } from '@/components/designSystem/Button';
import { useAsync } from '@/lib/hooks/useAsync';
import { buildRoute } from '@/lib/navigation/routes';
import { getCompanies } from '@/lib/services/companies';
import { getMovies } from '@/lib/services/movies';
import { useCompanyStore } from '@/store/companyStore';
import { CompanyGrid } from './components';
import { CREATE_ICON, CREATE_LABEL, SCREEN_SUBTITLE, SCREEN_TITLE } from './const';
import { buildCompanyRows } from './helpers';
import { CompanyListSkeleton } from './skeleton';
import { styles } from './style';
import type { CompanyListData } from './type';

const loadCompanyList = async (): Promise<CompanyListData> => {
  const [companies, movies] = await Promise.all([getCompanies(), getMovies()]);
  return { companies, movies };
};

export const CompanyListScreen = () => {
  const navigate = useNavigate();
  const createdCompanies = useCompanyStore((state) => state.createdCompanies);
  const listState = useAsync(loadCompanyList, []);

  return (
    <div style={styles.screen}>
      <PageHeader
        title={SCREEN_TITLE}
        subtitle={SCREEN_SUBTITLE}
        actions={<Button label={CREATE_LABEL} icon={CREATE_ICON} onPress={() => navigate(buildRoute.companyCreate())} />}
      />
      <AsyncContent state={listState} skeleton={<CompanyListSkeleton />}>
        {({ companies, movies }) => (
          <CompanyGrid
            rows={buildCompanyRows(companies, createdCompanies, movies)}
            onSelectCompany={(companyId) => navigate(buildRoute.companyDetail(companyId))}
          />
        )}
      </AsyncContent>
    </div>
  );
};
