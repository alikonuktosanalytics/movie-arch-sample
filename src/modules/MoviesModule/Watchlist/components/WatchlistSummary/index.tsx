import { buildSummaryItems } from './helpers';
import { styles } from './style';
import type { WatchlistSummaryProps } from './type';

export const WatchlistSummary = ({ totals }: WatchlistSummaryProps) => (
  <section style={styles.container}>
    {buildSummaryItems(totals).map((item) => (
      <div key={item.label} style={styles.tile}>
        <span style={styles.label}>{item.label}</span>
        <span style={styles.value}>{item.value}</span>
      </div>
    ))}
  </section>
);
