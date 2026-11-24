/** Words skipped when building initials ("The Dark Knight" → "DK"). */
export const STOP_WORDS = new Set(['the', 'a', 'an', 'of', 'and']);
export const DEFAULT_INITIALS_LENGTH = 2;
export const INITIALS_FALLBACK = '?';

export const HUE_RANGE = 360;
/** Hue distance between the two gradient stops. */
export const GRADIENT_HUE_OFFSET = 45;

export const DEFAULT_AVATAR_SIZE = 56;
/** Initials font size relative to the avatar size. */
export const AVATAR_FONT_SCALE = 0.36;

/** Inner padding (relative to size) around a `contain` logo. */
export const LOGO_PADDING_SCALE = 0.12;

/** Muted fallback gradient: low saturation so generated artwork does not shout next to real posters. */
export const GRADIENT_STOPS = {
  from: { saturation: 22, lightness: 52 },
  to: { saturation: 26, lightness: 32 },
} as const;
