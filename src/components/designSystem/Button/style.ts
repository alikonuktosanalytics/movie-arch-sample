import { colors, createStyles, fontSize, fontWeight, radius, shadow, spacing } from '../theme';

export const styles = createStyles({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm - 2,
    height: 38,
    padding: `0 ${spacing.lg - 2}px`,
    borderRadius: radius.md,
    border: '1px solid transparent',
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    whiteSpace: 'nowrap',
  },
  primary: { background: colors.primary, color: colors.onPrimary, boxShadow: shadow.card },
  secondary: { background: colors.surface, color: colors.text, borderColor: colors.border, boxShadow: shadow.card },
  ghost: { background: 'transparent', color: colors.textMuted },
  danger: { background: colors.danger, color: colors.onPrimary },
  small: { height: 30, padding: `0 ${spacing.md - 2}px`, fontSize: fontSize.xs + 1 },
  fullWidth: { width: '100%' },
});
