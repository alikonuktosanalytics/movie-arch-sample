import { Button } from '@/components/designSystem/Button';
import { Icon } from '@/components/designSystem/Icon';
import { DEFAULT_EMPTY_ICON, EMPTY_ICON_SIZE } from './const';
import { styles } from './style';
import type { EmptyStateProps } from './type';

export type { EmptyStateProps } from './type';

export const EmptyState = ({ title, description, icon = DEFAULT_EMPTY_ICON, actionLabel, onAction }: EmptyStateProps) => (
  <div style={styles.container}>
    <span style={styles.iconCircle}>
      <Icon name={icon} size={EMPTY_ICON_SIZE} />
    </span>
    <h2 style={styles.title}>{title}</h2>
    {description && <p style={styles.description}>{description}</p>}
    {actionLabel && onAction && <Button label={actionLabel} variant="secondary" onPress={onAction} />}
  </div>
);
