import { colors, createStyles, fontSize, radius, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: spacing.md,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xs,
    padding: spacing.lg,
    textAlign: 'left',
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.lg,
  },
  cardNext: {
    textAlign: 'right',
  },
  direction: {
    fontSize: fontSize.xs,
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: colors.textSubtle,
  },
  text: {
    fontSize: fontSize.sm,
    fontWeight: 600,
  },
  footer: {
    gridColumn: '1 / -1',
    display: 'flex',
    justifyContent: 'center',
  },
});
