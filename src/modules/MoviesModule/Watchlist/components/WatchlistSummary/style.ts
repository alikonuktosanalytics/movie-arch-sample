import { colors, createStyles, fontSize, radius, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: spacing.md,
  },
  tile: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xs,
    padding: spacing.lg,
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.lg,
  },
  label: {
    fontSize: fontSize.xs,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: colors.textMuted,
  },
  value: {
    fontSize: fontSize.xl,
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
});
