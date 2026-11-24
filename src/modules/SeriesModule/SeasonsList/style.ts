import { colors, createStyles, fontSize, radius, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xl,
  },
  intro: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: spacing.xl,
    flexWrap: 'wrap',
  },
  overview: {
    flex: '1 1 280px',
    margin: 0,
    maxWidth: 720,
    fontSize: fontSize.md,
    lineHeight: 1.6,
    color: colors.textMuted,
  },
  seasonPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.lg,
    padding: spacing.lg,
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.lg,
  },
  seasonStats: {
    fontSize: fontSize.sm,
    color: colors.textMuted,
  },
});
