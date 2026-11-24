import { colors, createStyles, fontSize, radius, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  container: {
    display: 'flex',
    gap: spacing.xl,
    flexWrap: 'wrap',
    padding: spacing.xl,
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.lg,
  },
  still: {
    flex: '0 1 320px',
    aspectRatio: '16 / 9',
    borderRadius: radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: fontSize.xl,
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
    minWidth: 0,
  },
  eyebrow: {
    fontSize: fontSize.xs,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: colors.primary,
  },
  title: {
    margin: 0,
    fontSize: fontSize.xl,
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  overview: {
    margin: 0,
    fontSize: fontSize.md,
    lineHeight: 1.6,
    color: colors.textMuted,
  },
  facts: {
    display: 'flex',
    gap: spacing.xl,
    flexWrap: 'wrap',
  },
  fact: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  factLabel: {
    fontSize: fontSize.xs,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: colors.textSubtle,
  },
  factValue: {
    fontSize: fontSize.sm,
    fontWeight: 600,
  },
});
