import { colors, createStyles, fontSize, radius, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  container: {
    display: 'flex',
    gap: spacing.xl,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: spacing.xl,
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.lg,
  },
  content: {
    flex: '1 1 320px',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.md,
    minWidth: 0,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    flexWrap: 'wrap',
  },
  name: {
    margin: 0,
    fontSize: fontSize.xxl,
    fontWeight: 600,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
  },
  description: {
    margin: 0,
    fontSize: fontSize.md,
    lineHeight: 1.6,
    color: colors.textMuted,
    maxWidth: 680,
  },
  facts: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: spacing.md,
    marginTop: spacing.sm,
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
