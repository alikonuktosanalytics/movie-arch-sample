import { colors, createStyles, radius, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: spacing.md,
    padding: spacing.lg,
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.lg,
  },
});
