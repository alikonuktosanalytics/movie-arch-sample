import { Avatar } from '../Artwork';
import { Badge } from '../Badge';
import { ROW_CARD_AVATAR_SIZE } from './const';
import { styles } from './style';
import type { CompanyCardProps } from './type';

export const CompanyCard = ({ name, logoUrl, subtitle, badge, onPress }: CompanyCardProps) => (
  <button type="button" className="pressable" onClick={onPress} style={styles.rowCard}>
    <Avatar name={name} imageUrl={logoUrl} size={ROW_CARD_AVATAR_SIZE} shape="rounded" fit="contain" />
    <div style={styles.rowBody}>
      <h3 style={styles.title}>{name}</h3>
      {subtitle && <span style={styles.meta}>{subtitle}</span>}
    </div>
    {badge && <Badge label={badge} tone="primary" />}
  </button>
);
