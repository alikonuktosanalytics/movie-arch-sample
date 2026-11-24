import { create } from 'zustand';
import { getLocalStorage } from '@/lib/helpers/getLocalStorage';
import { sendLog } from '@/lib/helpers/sendLog';
import { setLocalStorage } from '@/lib/helpers/setLocalStorage';
import type { Company } from '@/lib/types';
import { COMPANY_STORAGE_KEY } from './const';
import type { CompanyState } from './type';

export { COMPANY_STORAGE_KEY } from './const';

export const useCompanyStore = create<CompanyState>()((set, get) => ({
  createdCompanies: getLocalStorage<Company[]>(COMPANY_STORAGE_KEY, []),

  addCompany: (company) => {
    set({ createdCompanies: [{ ...company, isUserCreated: true }, ...get().createdCompanies] });
    sendLog('company_created', { companyId: company.id, name: company.name });
  },
}));

useCompanyStore.subscribe((state) => {
  setLocalStorage(COMPANY_STORAGE_KEY, state.createdCompanies);
});

export const selectCreatedCompany = (companyId: string) => (state: CompanyState) =>
  state.createdCompanies.find((company) => company.id === companyId);
