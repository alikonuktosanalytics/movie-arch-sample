import { Avatar } from '../Artwork';
import { ROW_CARD_AVATAR_SIZE } from './const';
import { styles } from './style';
import type { ActorCardProps } from './type';

export const ActorCard = ({ name, photoUrl, subtitle, onPress }: ActorCardProps) => (
  <button type="button" className="pressable" onClick={onPress} style={styles.rowCard}>
    <Avatar name={name} imageUrl={photoUrl} size={ROW_CARD_AVATAR_SIZE} />
    <div style={styles.rowBody}>
      <h3 style={styles.title}>{name}</h3>
      {subtitle && <span style={styles.meta}>{subtitle}</span>}
    </div>
  </button>
);
