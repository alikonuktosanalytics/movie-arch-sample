import { DEFAULT_SKELETON_HEIGHT } from './const';
import { styles } from './style';
import type { SkeletonProps } from './type';

export type { SkeletonProps } from './type';

/** The only primitive skeleton. Screen/component `skeleton.tsx` files compose it. */
export const Skeleton = ({ width = '100%', height = DEFAULT_SKELETON_HEIGHT, radius, aspectRatio }: SkeletonProps) => (
  <div
    aria-hidden
    style={{
      ...styles.block,
      width,
      height: aspectRatio ? undefined : height,
      aspectRatio,
      ...(radius !== undefined ? { borderRadius: radius } : {}),
    }}
  />
);
