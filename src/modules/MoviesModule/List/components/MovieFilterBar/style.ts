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
  controls: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: spacing.md,
    alignItems: 'end',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  chip: {
    padding: `${spacing.xs + 2}px ${spacing.md}px`,
    borderRadius: radius.pill,
    border: `1px solid ${colors.border}`,
    background: 'transparent',
    fontSize: fontSize.xs + 1,
    fontWeight: 600,
    color: colors.textMuted,
  },
  chipActive: {
    background: colors.primary,
    borderColor: colors.primary,
    color: colors.onPrimary,
  },
  reset: {
    justifySelf: 'start',
  },
});
