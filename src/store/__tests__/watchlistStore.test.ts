import { beforeEach, describe, expect, it } from 'vitest';
import { selectIsInWatchlist, useWatchlistStore, WATCHLIST_STORAGE_KEY } from '../watchlistStore';

beforeEach(() => {
  useWatchlistStore.setState({ movieIds: [] });
});

describe('watchlistStore', () => {
  it('adds ids once (no duplicates) and keeps insertion order', () => {
    const { add } = useWatchlistStore.getState();
    add('m1');
    add('m2');
    add('m1');
    expect(useWatchlistStore.getState().movieIds).toEqual(['m1', 'm2']);
  });

  it('toggle adds then removes', () => {
    const { toggle } = useWatchlistStore.getState();
    toggle('m3');
    expect(selectIsInWatchlist('m3')(useWatchlistStore.getState())).toBe(true);
    toggle('m3');
    expect(selectIsInWatchlist('m3')(useWatchlistStore.getState())).toBe(false);
  });

  it('persists every change to localStorage', () => {
    useWatchlistStore.getState().add('m7');
    expect(JSON.parse(window.localStorage.getItem(WATCHLIST_STORAGE_KEY) ?? '[]')).toEqual(['m7']);
    useWatchlistStore.getState().clear();
    expect(JSON.parse(window.localStorage.getItem(WATCHLIST_STORAGE_KEY) ?? '[]')).toEqual([]);
  });
});
