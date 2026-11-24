import { Button } from '@/components/designSystem/Button';
import { CompanyCard } from '@/components/designSystem/Cards';
import { BottomSheet } from '@/components/designSystem/Modals';
import { CANCEL_LABEL, CONFIRM_LABEL, PREVIEW_HINT, SHEET_TITLE } from './const';
import { styles } from './style';
import type { CreateConfirmSheetProps } from './type';

export const CreateConfirmSheet = ({ company, onConfirm, onCancel }: CreateConfirmSheetProps) => (
  <BottomSheet visible={company !== null} title={SHEET_TITLE} onClose={onCancel}>
    {company && (
      <>
        <p style={styles.hint}>{PREVIEW_HINT}</p>
        <CompanyCard name={company.name} logoUrl={company.logoUrl} subtitle={`${company.country} · Since ${company.foundedYear}`} badge="New" />
        {company.description && <p style={styles.description}>{company.description}</p>}
        <div style={styles.actions}>
          <Button label={CANCEL_LABEL} variant="secondary" onPress={onCancel} />
          <Button label={CONFIRM_LABEL} onPress={onConfirm} />
        </div>
      </>
    )}
  </BottomSheet>
);
