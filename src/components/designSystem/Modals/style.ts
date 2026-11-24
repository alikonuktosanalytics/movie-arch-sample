import { colors, createStyles, fontSize, radius, shadow, spacing } from '../theme';

export const styles = createStyles({
  overlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    background: colors.overlay,
    animation: 'fade-in 0.2s ease',
  },
  sheet: {
    width: '100%',
    maxWidth: 560,
    maxHeight: '85vh',
    overflowY: 'auto',
    padding: `${spacing.md}px ${spacing.xl}px ${spacing.xl}px`,
    background: colors.surface,
    borderTop: `1px solid ${colors.border}`,
    borderRadius: `${radius.lg}px ${radius.lg}px 0 0`,
    boxShadow: shadow.sheet,
    animation: 'sheet-up 0.25s ease-out',
  },
  handle: {
    width: 40,
    height: 4,
    margin: `0 auto ${spacing.lg}px`,
    borderRadius: radius.pill,
    background: colors.border,
  },
  title: {
    margin: `0 0 ${spacing.lg}px`,
    fontSize: fontSize.lg,
    fontWeight: 600,
  },
});
