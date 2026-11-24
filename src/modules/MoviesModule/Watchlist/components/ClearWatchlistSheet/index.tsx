import { Button } from '@/components/designSystem/Button';
import { BottomSheet } from '@/components/designSystem/Modals';
import { CANCEL_LABEL, CONFIRM_LABEL, SHEET_TITLE } from './const';
import { getClearMessage } from './helpers';
import { styles } from './style';
import type { ClearWatchlistSheetProps } from './type';

export const ClearWatchlistSheet = ({ visible, count, onConfirm, onCancel }: ClearWatchlistSheetProps) => (
  <BottomSheet visible={visible} title={SHEET_TITLE} onClose={onCancel}>
    <p style={styles.message}>{getClearMessage(count)}</p>
    <div style={styles.actions}>
      <Button label={CANCEL_LABEL} variant="secondary" onPress={onCancel} />
      <Button label={CONFIRM_LABEL} variant="danger" onPress={onConfirm} disabled={count === 0} />
    </div>
  </BottomSheet>
);
