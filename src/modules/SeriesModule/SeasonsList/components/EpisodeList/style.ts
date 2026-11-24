import { colors, createStyles, fontSize, radius, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.lg,
    width: '100%',
    padding: spacing.md,
    textAlign: 'left',
    background: colors.surfaceRaised,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.md,
  },
  code: {
    minWidth: 64,
    fontSize: fontSize.xs,
    fontWeight: 700,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    color: colors.primary,
  },
  texts: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: fontSize.sm + 1,
    fontWeight: 700,
  },
  meta: {
    fontSize: fontSize.xs,
    color: colors.textMuted,
  },
  chevron: {
    color: colors.textSubtle,
  },
});
