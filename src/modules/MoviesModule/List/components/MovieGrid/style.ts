import { colors, createStyles, fontSize, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
  },
  resultLabel: {
    fontSize: fontSize.sm,
    color: colors.textMuted,
  },
});
