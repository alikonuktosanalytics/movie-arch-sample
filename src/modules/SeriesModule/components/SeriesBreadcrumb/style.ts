import { colors, createStyles, fontSize, spacing } from '@/components/designSystem/theme';

export const styles = createStyles({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: spacing.sm,
    margin: 0,
    padding: 0,
    listStyle: 'none',
    fontSize: fontSize.sm,
  },
  link: {
    color: colors.textMuted,
    fontWeight: 600,
  },
  current: {
    color: colors.text,
    fontWeight: 700,
  },
  separator: {
    color: colors.textSubtle,
  },
});
