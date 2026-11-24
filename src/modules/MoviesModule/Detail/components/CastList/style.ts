import { colors, createStyles, fontSize, radius, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
    padding: spacing.lg,
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.lg,
  },
  title: {
    margin: 0,
    fontSize: fontSize.lg,
    fontWeight: 700,
  },
  summary: {
    margin: 0,
    fontSize: fontSize.sm,
    color: colors.textMuted,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
  },
});
