import { describe, expect, it } from 'vitest';
import { FACT_LABELS } from '../const';
import { buildEpisodeFacts } from '../helpers';

describe('buildEpisodeFacts', () => {
  it('formats air date, runtime and rating', () => {
    expect(buildEpisodeFacts({ airDate: '2014-02-09', runtime: 60, rating: 9.6 })).toEqual([
      { label: FACT_LABELS.aired, value: 'Feb 9, 2014' },
      { label: FACT_LABELS.runtime, value: '1h' },
      { label: FACT_LABELS.rating, value: '★ 9.6' },
    ]);
  });
});
