import { formatRating, formatRuntime } from '@/lib/helpers/formatters';
import type { WatchlistTotals } from '../../type';
import { NO_VALUE, SUMMARY_LABELS } from './const';
import type { SummaryItem } from './type';

export const buildSummaryItems = (totals: WatchlistTotals): SummaryItem[] => [
  { label: SUMMARY_LABELS.count, value: String(totals.count) },
  { label: SUMMARY_LABELS.runtime, value: formatRuntime(totals.totalRuntime) },
  { label: SUMMARY_LABELS.rating, value: totals.count > 0 ? `★ ${formatRating(totals.averageRating)}` : NO_VALUE },
  { label: SUMMARY_LABELS.genre, value: totals.topGenre ?? NO_VALUE },
];
