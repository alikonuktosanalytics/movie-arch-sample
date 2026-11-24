import { useState } from 'react';
import { radius } from '../theme';
import { AVATAR_FONT_SCALE, DEFAULT_AVATAR_SIZE, LOGO_PADDING_SCALE } from './const';
import { getGradient, getInitials, shouldShowImage } from './helpers';
import { styles } from './style';
import type { AvatarProps } from './type';

/** Actor photo (circle, cover) or company logo (rounded, contain), with a generated initials fallback. */
export const Avatar = ({ name, imageUrl, size = DEFAULT_AVATAR_SIZE, shape = 'circle', fit = 'cover' }: AvatarProps) => {
  const [failedUrl, setFailedUrl] = useState<string>();
  const showImage = shouldShowImage(imageUrl, failedUrl);
  const isLogo = showImage && fit === 'contain';

  return (
    <div
      aria-hidden
      style={{
        ...styles.avatar,
        width: size,
        height: size,
        fontSize: Math.round(size * AVATAR_FONT_SCALE),
        borderRadius: shape === 'circle' ? radius.pill : radius.md,
        background: showImage ? undefined : getGradient(name),
        ...(isLogo ? { ...styles.logoSurface, padding: Math.round(size * LOGO_PADDING_SCALE) } : {}),
      }}
    >
      {showImage ? (
        <img
          src={imageUrl}
          alt=""
          loading="lazy"
          style={{ ...styles.image, objectFit: fit, ...(isLogo ? styles.logoImage : {}) }}
          onError={() => setFailedUrl(imageUrl)}
        />
      ) : (
        getInitials(name)
      )}
    </div>
  );
};
