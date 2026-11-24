import { createStyles, spacing } from '@/components/designSystem/theme';
import { MAX_CONTENT_WIDTH } from './const';

export const styles = createStyles({
  main: {
    width: '100%',
    maxWidth: MAX_CONTENT_WIDTH,
    margin: '0 auto',
    minWidth: 0,
    padding: `${spacing.xxl}px ${spacing.xl}px ${spacing.xxxl}px`,
  },
});
