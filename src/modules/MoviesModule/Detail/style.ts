import { createStyles, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xxl,
  },
  columns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: spacing.xl,
    alignItems: 'start',
  },
});
