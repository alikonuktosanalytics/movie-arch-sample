import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AsyncContent, BackButton, PageHeader } from '@/components/common';
import { useAsync } from '@/lib/hooks/useAsync';
import { buildRoute } from '@/lib/navigation/routes';
import { getCompanies } from '@/lib/services/companies';
import type { Company } from '@/lib/types';
import { useCompanyStore } from '@/store/companyStore';
import { CompanyForm, CreateConfirmSheet } from './components';
import { BACK_LABEL, INITIAL_VALUES, SCREEN_SUBTITLE, SCREEN_TITLE } from './const';
import { buildCompanyFromForm, createCompanyId, isFormValid, validateCompanyForm } from './helpers';
import { CompanyCreateSkeleton } from './skeleton';
import { styles } from './style';
import type { CompanyFormField, CompanyFormValues } from './type';

export const CompanyCreateScreen = () => {
  const navigate = useNavigate();
  const createdCompanies = useCompanyStore((state) => state.createdCompanies);
  const addCompany = useCompanyStore((state) => state.addCompany);
  const companiesState = useAsync(getCompanies, []);

  const [values, setValues] = useState<CompanyFormValues>(INITIAL_VALUES);
  const [showErrors, setShowErrors] = useState(false);
  const [pendingCompany, setPendingCompany] = useState<Company | null>(null);

  const updateField = (field: CompanyFormField, value: string) => setValues((previous) => ({ ...previous, [field]: value }));

  const confirmCreate = () => {
    if (!pendingCompany) return;
    addCompany(pendingCompany);
    setPendingCompany(null);
    navigate(buildRoute.companyDetail(pendingCompany.id), { replace: true });
  };

  return (
    <div style={styles.screen}>
      <BackButton label={BACK_LABEL} onPress={() => navigate(buildRoute.companies())} />
      <PageHeader title={SCREEN_TITLE} subtitle={SCREEN_SUBTITLE} />
      <AsyncContent state={companiesState} skeleton={<CompanyCreateSkeleton />}>
        {(apiCompanies) => {
          const errors = validateCompanyForm(values, {
            currentYear: new Date().getFullYear(),
            existingNames: [...apiCompanies, ...createdCompanies].map((company) => company.name),
          });

          const submit = () => {
            setShowErrors(true);
            if (!isFormValid(errors)) return;
            setPendingCompany(buildCompanyFromForm(values, createCompanyId(values.name, Date.now())));
          };

          return (
            <CompanyForm values={values} errors={showErrors ? errors : {}} onChange={updateField} onSubmit={submit} />
          );
        }}
      </AsyncContent>
      <CreateConfirmSheet company={pendingCompany} onConfirm={confirmCreate} onCancel={() => setPendingCompany(null)} />
    </div>
  );
};
