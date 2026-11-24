import { createStyles, fontSize, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.lg,
  },
  title: {
    margin: 0,
    fontSize: fontSize.lg,
    fontWeight: 700,
  },
});
