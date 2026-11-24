import { DEFAULT_INITIALS_LENGTH, GRADIENT_HUE_OFFSET, GRADIENT_STOPS, HUE_RANGE, INITIALS_FALLBACK, STOP_WORDS } from './const';

/** Deterministic 32-bit string hash (same input → same colors on every render / device). */
export const hashString = (value: string): number => {
  let hash = 0;
  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) | 0;
  }
  return Math.abs(hash);
};

/** "The Dark Knight" → "DK", "Mad Max: Fury Road" → "MM", "A24" → "A2". */
export const getInitials = (text: string, maxLetters = DEFAULT_INITIALS_LENGTH): string => {
  const words = text
    .split(/[\s:\-–]+/)
    .map((word) => word.replace(/[^\p{L}\p{N}]/gu, ''))
    .filter(Boolean);
  const meaningful = words.filter((word) => !STOP_WORDS.has(word.toLowerCase()));
  const source = meaningful.length > 0 ? meaningful : words;

  if (source.length === 0) return INITIALS_FALLBACK;
  if (source.length === 1) return source[0].slice(0, maxLetters).toUpperCase();
  return source
    .slice(0, maxLetters)
    .map((word) => word[0].toUpperCase())
    .join('');
};

/** Two-stop gradient whose hue is derived from the seed. */
export const getGradient = (seed: string): string => {
  const hue = hashString(seed) % HUE_RANGE;
  const secondHue = (hue + GRADIENT_HUE_OFFSET) % HUE_RANGE;
  const { from, to } = GRADIENT_STOPS;
  return `linear-gradient(135deg, hsl(${hue} ${from.saturation}% ${from.lightness}%), hsl(${secondHue} ${to.saturation}% ${to.lightness}%))`;
};

/**
 * The image is shown only when there is a URL and it has not failed to load.
 * Comparing against the failed URL (instead of a boolean) re-enables the image when the URL changes.
 */
export const shouldShowImage = (imageUrl: string | undefined, failedUrl: string | undefined): imageUrl is string =>
  Boolean(imageUrl) && imageUrl !== failedUrl;
