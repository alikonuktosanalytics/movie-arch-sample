import { DEFAULT_GRID_GAP, DEFAULT_MIN_ITEM_WIDTH } from './const';
import type { GridProps } from './type';

export type { GridProps } from './type';

/** Responsive auto-fill grid (web stand-in for a multi-column FlatList). */
export const Grid = ({ children, minItemWidth = DEFAULT_MIN_ITEM_WIDTH, gap = DEFAULT_GRID_GAP }: GridProps) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(min(${minItemWidth}px, 100%), 1fr))`,
      gap,
    }}
  >
    {children}
  </div>
);
