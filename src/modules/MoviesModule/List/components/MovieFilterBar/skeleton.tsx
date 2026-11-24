import { Skeleton } from '@/components/designSystem/Skeleton';
import { radius } from '@/components/designSystem/theme';
import { SKELETON_CHIP_WIDTHS } from './const';
import { styles } from './style';

export const MovieFilterBarSkeleton = () => (
  <div style={styles.container}>
    <div style={styles.controls}>
      <Skeleton height={40} radius={radius.md} />
      <Skeleton height={40} radius={radius.md} />
    </div>
    <div style={styles.chips}>
      {SKELETON_CHIP_WIDTHS.map((width, index) => (
        <Skeleton key={index} width={width} height={28} radius={radius.pill} />
      ))}
    </div>
  </div>
);
