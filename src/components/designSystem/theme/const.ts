/**
 * Neutral dark palette: zinc greys, one calm accent. Posters and photos carry the color;
 * the UI stays quiet (no neon, no glow, no saturated yellow).
 */
export const colors = {
  background: '#0f0f11',
  surface: '#17171a',
  surfaceRaised: '#202024',
  surfaceHover: '#26262b',
  border: '#27272a',
  borderStrong: '#3f3f46',
  text: '#ececef',
  textMuted: '#a1a1aa',
  textSubtle: '#71717a',
  primary: '#818cf8',
  primarySoft: 'rgba(129, 140, 248, 0.14)',
  onPrimary: '#0f0f11',
  danger: '#f87171',
  dangerSoft: 'rgba(248, 113, 113, 0.12)',
  success: '#4ade80',
  successSoft: 'rgba(74, 222, 128, 0.12)',
  info: '#7dd3fc',
  infoSoft: 'rgba(125, 211, 252, 0.12)',
  /** Star ratings */
  rating: '#fbbf24',
  overlay: 'rgba(0, 0, 0, 0.6)',
  /** Logos are mostly drawn for light backgrounds, so they keep a light tile in the dark theme. */
  logoSurface: '#f4f4f5',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const radius = {
  sm: 6,
  md: 8,
  lg: 12,
  pill: 999,
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 15,
  lg: 18,
  xl: 24,
  xxl: 30,
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const shadow = {
  card: 'none',
  cardHover: '0 8px 24px rgba(0, 0, 0, 0.35)',
  sheet: '0 -12px 40px rgba(0, 0, 0, 0.5)',
} as const;
