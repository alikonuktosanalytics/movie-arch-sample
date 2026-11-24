import { Icon } from '../Icon';
import { BUTTON_ICON_SIZE } from './const';
import { styles } from './style';

import type { ButtonProps } from './type';

export type { ButtonProps, ButtonSize, ButtonVariant } from './type';

export const Button = ({
  label,
  onPress,
  variant = 'primary',
  size = 'regular',
  icon,
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) => (
  <button
    type={type}
    className="tappable"
    disabled={disabled}
    onClick={onPress}
    style={{
      ...styles.base,
      ...styles[variant],
      ...(size === 'small' ? styles.small : {}),
      ...(fullWidth ? styles.fullWidth : {}),
    }}
  >
    {icon && <Icon name={icon} size={BUTTON_ICON_SIZE} />}
    {label}
  </button>
);
