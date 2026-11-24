import { Skeleton } from '@/components/designSystem/Skeleton';
import { radius } from '@/components/designSystem/theme';
import { FIELDS } from './const';
import { styles } from './style';

export const CompanyFormSkeleton = () => (
  <div style={styles.form}>
    <div style={styles.fields}>
      {FIELDS.map((config) => (
        <div key={config.field} style={config.fullWidth ? styles.fullWidth : undefined}>
          <Skeleton width={100} height={12} />
          <div style={{ height: 8 }} />
          <Skeleton height={config.multiline ? 96 : 40} radius={radius.md} />
        </div>
      ))}
    </div>
    <Skeleton width={160} height={40} radius={radius.pill} />
  </div>
);
