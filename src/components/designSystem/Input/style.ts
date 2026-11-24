import { colors, createStyles, fontSize, radius, spacing } from '../theme';

export const styles = createStyles({
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xs + 2,
    minWidth: 0,
  },
  label: {
    fontSize: fontSize.sm - 1,
    fontWeight: 500,
    color: colors.text,
  },
  control: {
    width: '100%',
    height: 38,
    padding: `0 ${spacing.md}px`,
    borderRadius: radius.md,
    outline: 'none',
    transition: 'border-color 0.15s ease',
    border: `1px solid ${colors.border}`,
    background: colors.surface,
    color: colors.text,
    fontSize: fontSize.sm,
  },
  textarea: {
    height: 'auto',
    padding: `${spacing.sm + 2}px ${spacing.md}px`,
    minHeight: 96,
    resize: 'vertical',
  },
  controlError: {
    borderColor: colors.danger,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: spacing.sm,
    fontSize: fontSize.xs,
    minHeight: 16,
  },
  error: { color: colors.danger },
  hint: { color: colors.textSubtle, marginLeft: 'auto' },
});
