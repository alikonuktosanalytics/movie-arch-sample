import { colors, createStyles, fontSize, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  hint: {
    margin: `0 0 ${spacing.md}px`,
    fontSize: fontSize.sm,
    color: colors.textMuted,
  },
  description: {
    margin: `${spacing.md}px 0 ${spacing.xl}px`,
    fontSize: fontSize.sm,
    color: colors.textMuted,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: spacing.md,
    flexWrap: 'wrap',
  },
});
