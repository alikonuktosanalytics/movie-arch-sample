import { colors, createStyles, fontSize, radius } from '../theme';

export const styles = createStyles({
  poster: {
    position: 'relative',
    aspectRatio: '2 / 3',
    borderRadius: radius.md,
    overflow: 'hidden',
    background: colors.surfaceRaised,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    containerType: 'inline-size',
    flexShrink: 0,
  },
  posterInitials: {
    fontSize: '30cqw',
    fontWeight: 600,
    letterSpacing: '-0.03em',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  posterCaption: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: '8cqw',
    fontSize: '7.5cqw',
    fontWeight: 600,
    color: '#ffffff',
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.45))',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  image: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  /** Logos are laid out inside the avatar padding instead of covering it. */
  logoImage: {
    position: 'static',
  },
  logoSurface: {
    background: colors.logoSurface,
    border: `1px solid ${colors.border}`,
    boxSizing: 'border-box',
  },
  avatar: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.95)',
    fontSize: fontSize.md,
  },
});
