import { colors, createStyles, fontSize, radius, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  container: {
    display: 'flex',
    gap: spacing.xxl,
    flexWrap: 'wrap',
    padding: spacing.xl,
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.lg,
  },
  posterWrapper: {
    width: 220,
    maxWidth: '100%',
  },
  content: {
    flex: '1 1 320px',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.lg,
    minWidth: 0,
  },
  title: {
    margin: 0,
    fontSize: fontSize.xxl,
    fontWeight: 600,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
  },
  meta: {
    fontSize: fontSize.sm,
    color: colors.textMuted,
  },
  overview: {
    margin: 0,
    fontSize: fontSize.md,
    lineHeight: 1.6,
    color: colors.text,
    maxWidth: 640,
  },
  actions: {
    display: 'flex',
    gap: spacing.md,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
