import { colors, createStyles, fontSize, spacing } from '@/components/designSystem/theme';

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
  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  decade: {
    margin: 0,
    fontSize: fontSize.sm,
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: colors.primary,
  },
});
