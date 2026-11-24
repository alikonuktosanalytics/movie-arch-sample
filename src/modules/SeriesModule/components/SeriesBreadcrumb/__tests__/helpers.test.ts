import { describe, expect, it } from 'vitest';
import { ROOT_LABEL } from '../const';
import { buildSeriesBreadcrumb } from '../helpers';

const SERIES = { id: 's1', title: 'Breaking Bad' };

describe('buildSeriesBreadcrumb', () => {
  it('root level: a single, non-linked item', () => {
    expect(buildSeriesBreadcrumb({})).toEqual([{ label: ROOT_LABEL }]);
  });

  it('series level: root links, series is current', () => {
    expect(buildSeriesBreadcrumb({ series: SERIES })).toEqual([
      { label: ROOT_LABEL, to: '/series' },
      { label: 'Breaking Bad' },
    ]);
  });

  it('episode level: every ancestor links, season keeps the ?season param', () => {
    expect(buildSeriesBreadcrumb({ series: SERIES, seasonNumber: 2, episode: { code: 'S02E02', title: 'Grilled' } })).toEqual([
      { label: ROOT_LABEL, to: '/series' },
      { label: 'Breaking Bad', to: '/series/s1' },
      { label: 'Season 2', to: '/series/s1?season=2' },
      { label: 'S02E02 · Grilled' },
    ]);
  });
});
