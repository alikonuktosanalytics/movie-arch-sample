import { colors, createStyles, radius } from '../theme';

export const styles = createStyles({
  block: {
    background: colors.surfaceRaised,
    borderRadius: radius.sm,
    animation: 'skeleton-pulse 1.4s ease-in-out infinite',
  },
});
