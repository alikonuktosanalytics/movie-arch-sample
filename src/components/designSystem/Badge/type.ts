import type { IconName } from '../Icon';

export type BadgeTone = 'neutral' | 'primary' | 'success' | 'info' | 'danger';

export interface BadgeProps {
  label: string;
  tone?: BadgeTone;
  icon?: IconName;
}
