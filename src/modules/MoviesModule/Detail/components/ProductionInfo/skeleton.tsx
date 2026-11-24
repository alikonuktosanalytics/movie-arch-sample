import { Skeleton } from '@/components/designSystem/Skeleton';
import { FACT_LABELS } from './const';
import { styles } from './style';

export const ProductionInfoSkeleton = () => (
  <div style={styles.container}>
    <Skeleton width={120} height={20} />
    <div style={styles.facts}>
      {Object.keys(FACT_LABELS).map((key) => (
        <div key={key} style={{ display: 'contents' }}>
          <Skeleton width={90} height={14} />
          <Skeleton width="60%" height={14} />
        </div>
      ))}
    </div>
  </div>
);
