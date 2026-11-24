import type { CSSProperties } from 'react';

export interface PosterProps {
  title: string;
  /** Remote image. When missing or broken, the generated gradient + initials are shown. */
  imageUrl?: string;
  /** Defaults to 100% of the parent; height follows a 2:3 ratio. */
  width?: CSSProperties['width'];
  /** Title strip at the bottom; only shown on the generated fallback (real posters carry their own title). */
  showCaption?: boolean;
}

export type AvatarShape = 'circle' | 'rounded';
/** `cover` for photos, `contain` for logos (never cropped, shown on a light surface). */
export type ArtworkFit = 'cover' | 'contain';

export interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: number;
  shape?: AvatarShape;
  fit?: ArtworkFit;
}
