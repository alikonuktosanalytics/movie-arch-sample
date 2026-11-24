import { Icon } from '../Icon';
import { BADGE_ICON_SIZE } from './const';
import { styles } from './style';

import type { BadgeProps } from './type';

export type { BadgeProps, BadgeTone } from './type';

export const Badge = ({ label, tone = 'neutral', icon }: BadgeProps) => (
  <span style={{ ...styles.base, ...styles[tone] }}>
    {icon && <Icon name={icon} size={BADGE_ICON_SIZE} strokeWidth={2} />}
    {label}
  </span>
);
