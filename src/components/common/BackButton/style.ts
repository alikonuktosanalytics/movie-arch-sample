import { colors, createStyles, fontSize } from '@/components/designSystem/theme';

export const styles = createStyles({
  button: {
    alignSelf: 'flex-start',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: 0,
    border: 'none',
    background: 'none',
    fontSize: fontSize.sm,
    fontWeight: 500,
    color: colors.textMuted,
  },
});
