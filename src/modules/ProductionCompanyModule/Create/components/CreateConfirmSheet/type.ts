import type { Company } from '@/lib/types';

export interface CreateConfirmSheetProps {
  /** null = sheet closed */
  company: Company | null;
  onConfirm: () => void;
  onCancel: () => void;
}
