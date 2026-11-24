import { DEFAULT_ICON_SIZE, DEFAULT_STROKE_WIDTH, ICON_SHAPES, ICON_VIEWBOX } from './const';
import { styles } from './style';
import type { IconProps } from './type';

export type { IconName, IconProps } from './type';

/** Inline SVG icon set: no icon font, no emoji, inherits `color` from its parent. */
export const Icon = ({ name, size = DEFAULT_ICON_SIZE, strokeWidth = DEFAULT_STROKE_WIDTH }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={ICON_VIEWBOX}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={styles.svg}
    aria-hidden
  >
    {ICON_SHAPES[name].map((shape, index) => {
      if (shape.type === 'circle') return <circle key={index} cx={shape.cx} cy={shape.cy} r={shape.r} />;
      if (shape.type === 'rect') {
        return <rect key={index} x={shape.x} y={shape.y} width={shape.width} height={shape.height} rx={shape.rx} />;
      }
      return <path key={index} d={shape.d} />;
    })}
  </svg>
);
