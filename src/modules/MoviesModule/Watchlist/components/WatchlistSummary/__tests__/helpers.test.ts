import { describe, expect, it } from 'vitest';
import { NO_VALUE } from '../const';
import { buildSummaryItems } from '../helpers';

describe('buildSummaryItems', () => {
  it('formats totals for display', () => {
    const items = buildSummaryItems({ count: 3, totalRuntime: 439, averageRating: 8.6, topGenre: 'Sci-Fi' });
    expect(items.map((item) => item.value)).toEqual(['3', '7h 19m', '★ 8.6', 'Sci-Fi']);
  });

  it('shows placeholders instead of a misleading 0.0 rating when empty', () => {
    const items = buildSummaryItems({ count: 0, totalRuntime: 0, averageRating: 0, topGenre: null });
    expect(items.map((item) => item.value)).toEqual(['0', '0m', NO_VALUE, NO_VALUE]);
  });
});
