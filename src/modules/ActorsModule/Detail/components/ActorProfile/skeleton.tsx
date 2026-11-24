import { Skeleton } from '@/components/designSystem/Skeleton';
import { radius } from '@/components/designSystem/theme';
import { AVATAR_SIZE, FACT_LABELS } from './const';
import { styles } from './style';

export const ActorProfileSkeleton = () => (
  <div style={styles.container}>
    <Skeleton width={AVATAR_SIZE} height={AVATAR_SIZE} radius={radius.pill} />
    <div style={styles.content}>
      <Skeleton width="50%" height={36} />
      <Skeleton width="90%" height={14} />
      <Skeleton width="70%" height={14} />
      <div style={styles.facts}>
        {Object.keys(FACT_LABELS).map((key) => (
          <Skeleton key={key} width="80%" height={32} />
        ))}
      </div>
    </div>
  </div>
);
