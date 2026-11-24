import { Icon } from '@/components/designSystem/Icon';
import { BACK_ICON, BACK_ICON_SIZE } from './const';
import { styles } from './style';
import type { BackButtonProps } from './type';

export type { BackButtonProps } from './type';

export const BackButton = ({ label, onPress }: BackButtonProps) => (
  <button type="button" className="tappable" style={styles.button} onClick={onPress}>
    <Icon name={BACK_ICON} size={BACK_ICON_SIZE} />
    {label}
  </button>
);
