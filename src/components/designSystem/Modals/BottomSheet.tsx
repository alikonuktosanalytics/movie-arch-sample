import { useEffect } from 'react';
import { CLOSE_KEY } from './const';
import { styles } from './style';
import type { BottomSheetProps } from './type';

/** Web twin of a RN bottom sheet: slides up, closes on overlay click or Escape. */
export const BottomSheet = ({ visible, title, onClose, children }: BottomSheetProps) => {
  useEffect(() => {
    if (!visible) return undefined;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === CLOSE_KEY) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div style={styles.overlay} onClick={onClose} role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={styles.sheet}
        onClick={(event) => event.stopPropagation()}
      >
        <div style={styles.handle} />
        <h2 style={styles.title}>{title}</h2>
        {children}
      </div>
    </div>
  );
};
