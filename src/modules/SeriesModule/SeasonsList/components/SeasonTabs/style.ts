import { colors, createStyles, fontSize, radius, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  tabs: {
    display: 'flex',
    gap: spacing.sm,
    flexWrap: 'wrap',
  },
  tab: {
    padding: `${spacing.sm}px ${spacing.lg}px`,
    borderRadius: radius.pill,
    border: `1px solid ${colors.border}`,
    background: 'transparent',
    fontSize: fontSize.sm,
    fontWeight: 600,
    color: colors.textMuted,
  },
  tabActive: {
    background: colors.primary,
    borderColor: colors.primary,
    color: colors.onPrimary,
  },
});
