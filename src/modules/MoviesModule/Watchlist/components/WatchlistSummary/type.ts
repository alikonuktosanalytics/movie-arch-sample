import type { WatchlistTotals } from '../../type';

export interface WatchlistSummaryProps {
  totals: WatchlistTotals;
}

export interface SummaryItem {
  label: string;
  value: string;
}
