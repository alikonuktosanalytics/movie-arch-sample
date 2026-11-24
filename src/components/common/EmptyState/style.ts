import { colors, createStyles, fontSize, fontWeight, radius, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.sm,
    padding: `${spacing.xxxl}px ${spacing.xl}px`,
    textAlign: 'center',
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.lg,
  },
  iconCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    marginBottom: spacing.xs,
    borderRadius: radius.pill,
    background: colors.surfaceRaised,
    color: colors.textMuted,
  },
  title: { margin: 0, fontSize: fontSize.md, fontWeight: fontWeight.semibold },
  description: { margin: `0 0 ${spacing.sm}px`, maxWidth: 420, fontSize: fontSize.sm, color: colors.textMuted },
});
