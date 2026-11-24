import { colors, createStyles, fontSize, fontWeight, radius, spacing } from '../theme';

export const styles = createStyles({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.xs,
    padding: `1px ${spacing.sm}px`,
    borderRadius: radius.sm,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    whiteSpace: 'nowrap',
    border: '1px solid transparent',
  },
  neutral: { background: colors.surfaceRaised, color: colors.textMuted },
  primary: { background: colors.primarySoft, color: colors.primary },
  success: { background: colors.successSoft, color: colors.success },
  info: { background: colors.infoSoft, color: colors.info },
  danger: { background: colors.dangerSoft, color: colors.danger },
});
