import { Skeleton } from '@/components/designSystem/Skeleton';
import { radius } from '@/components/designSystem/theme';
import { FACT_LABELS, LOGO_SIZE } from './const';
import { styles } from './style';

export const CompanyHeaderSkeleton = () => (
  <div style={styles.container}>
    <Skeleton width={LOGO_SIZE} height={LOGO_SIZE} radius={radius.md} />
    <div style={styles.content}>
      <Skeleton width="50%" height={36} />
      <Skeleton width="85%" height={14} />
      <div style={styles.facts}>
        {Object.keys(FACT_LABELS).map((key) => (
          <Skeleton key={key} width="80%" height={32} />
        ))}
      </div>
    </div>
  </div>
);
