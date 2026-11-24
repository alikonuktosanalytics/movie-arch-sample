export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'regular' | 'small';

import type { IconName } from '../Icon';

export interface ButtonProps {
  label: string;
  /** RN-style naming on purpose: maps 1:1 to the mobile app. */
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  type?: 'button' | 'submit';
  disabled?: boolean;
  fullWidth?: boolean;
}
