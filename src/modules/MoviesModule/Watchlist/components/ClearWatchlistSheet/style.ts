import { colors, createStyles, fontSize, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  message: {
    margin: `0 0 ${spacing.xl}px`,
    fontSize: fontSize.sm,
    color: colors.textMuted,
  },
  actions: {
    display: 'flex',
    gap: spacing.md,
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
});
