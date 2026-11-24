import { colors, createStyles, fontSize, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  row: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: spacing.lg,
    flexWrap: 'wrap',
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xs,
    minWidth: 0,
  },
  title: {
    margin: 0,
    fontSize: fontSize.xl,
    fontWeight: 600,
    letterSpacing: '-0.025em',
    lineHeight: 1.2,
  },
  subtitle: {
    margin: 0,
    fontSize: fontSize.sm,
    color: colors.textMuted,
    maxWidth: 640,
  },
});
