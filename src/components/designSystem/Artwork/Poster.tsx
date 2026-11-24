import { useState } from 'react';
import { getGradient, getInitials, shouldShowImage } from './helpers';
import { styles } from './style';
import type { PosterProps } from './type';

/** Remote poster with a generated fallback (gradient seeded by the title + initials) for missing/broken images or offline use. */
export const Poster = ({ title, imageUrl, width = '100%', showCaption = false }: PosterProps) => {
  const [failedUrl, setFailedUrl] = useState<string>();
  const showImage = shouldShowImage(imageUrl, failedUrl);

  return (
    <div style={{ ...styles.poster, width, background: getGradient(title) }} aria-hidden>
      {showImage ? (
        <img src={imageUrl} alt="" loading="lazy" style={styles.image} onError={() => setFailedUrl(imageUrl)} />
      ) : (
        <>
          <span style={styles.posterInitials}>{getInitials(title)}</span>
          {showCaption && <span style={styles.posterCaption}>{title}</span>}
        </>
      )}
    </div>
  );
};
