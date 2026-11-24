import type { CSSProperties } from 'react';

export { colors, fontSize, fontWeight, radius, shadow, spacing } from './const';

/**
 * Web twin of React Native's `StyleSheet.create`.
 * Every `style.ts` uses it: values are checked as `CSSProperties`, keys stay typed (styles.typo → compile error).
 */
export const createStyles = <T extends Record<string, CSSProperties>>(styles: T): T => styles;
