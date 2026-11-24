import { createStyles, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xl,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
  },
});
