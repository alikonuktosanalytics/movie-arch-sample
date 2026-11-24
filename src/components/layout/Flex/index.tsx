import type { FlexProps } from './type';

export type { FlexProps } from './type';

/** RN-like `<View>` with flexbox props. Layout primitives contain no visual styling (no colors/borders). */
export const Flex = ({ children, direction = 'row', gap = 0, align, justify, wrap = false, flex, style }: FlexProps) => (
  <div
    style={{
      display: 'flex',
      flexDirection: direction,
      gap,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      flex,
      minWidth: 0,
      ...style,
    }}
  >
    {children}
  </div>
);
