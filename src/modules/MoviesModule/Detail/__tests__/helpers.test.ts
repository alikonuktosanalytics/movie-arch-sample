import { describe, expect, it } from 'vitest';
import type { Actor } from '@/lib/types';
import { orderCastByBilling } from '../helpers';

const actor = (id: string): Actor => ({ id, name: id, birthYear: 1980, birthPlace: '', bio: '' });

describe('orderCastByBilling', () => {
  it('orders actors by castIds (billing order), not by storage order', () => {
    const result = orderCastByBilling([actor('a1'), actor('a4'), actor('a5')], ['a5', 'a1', 'a4']);
    expect(result.map((item) => item.id)).toEqual(['a5', 'a1', 'a4']);
  });

  it('skips ids that have no matching actor', () => {
    expect(orderCastByBilling([actor('a1')], ['ghost', 'a1']).map((item) => item.id)).toEqual(['a1']);
  });
});
