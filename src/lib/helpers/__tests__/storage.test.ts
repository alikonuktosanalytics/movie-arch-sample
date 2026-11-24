import { afterEach, describe, expect, it, vi } from 'vitest';
import { getLocalStorage } from '../getLocalStorage';
import { getLogHistory } from '../sendLog';
import { setLocalStorage } from '../setLocalStorage';

afterEach(() => {
  window.localStorage.clear();
  vi.restoreAllMocks();
});

describe('getLocalStorage / setLocalStorage', () => {
  it('round-trips JSON values', () => {
    expect(setLocalStorage('ids', ['m1', 'm2'])).toBe(true);
    expect(getLocalStorage<string[]>('ids', [])).toEqual(['m1', 'm2']);
  });

  it('returns the fallback for missing keys', () => {
    expect(getLocalStorage('missing', 42)).toBe(42);
  });

  it('returns the fallback and logs when stored JSON is corrupt', () => {
    window.localStorage.setItem('broken', '{not json');
    expect(getLocalStorage('broken', 'fallback')).toBe('fallback');
    expect(getLogHistory().some((entry) => entry.event === 'storage_read_failed')).toBe(true);
  });

  it('returns false instead of throwing when storage is unavailable', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    expect(setLocalStorage('key', 'value')).toBe(false);
  });
});
