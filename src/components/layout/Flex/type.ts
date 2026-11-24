import type { CSSProperties, ReactNode } from 'react';

export interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  gap?: number;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: boolean;
  flex?: CSSProperties['flex'];
  style?: CSSProperties;
}
