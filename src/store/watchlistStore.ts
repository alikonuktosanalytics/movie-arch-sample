import { create } from 'zustand';
import { getLocalStorage } from '@/lib/helpers/getLocalStorage';
import { sendLog } from '@/lib/helpers/sendLog';
import { setLocalStorage } from '@/lib/helpers/setLocalStorage';
import { WATCHLIST_STORAGE_KEY } from './const';
import type { WatchlistState } from './type';

export { WATCHLIST_STORAGE_KEY } from './const';

export const useWatchlistStore = create<WatchlistState>()((set, get) => ({
  movieIds: getLocalStorage<string[]>(WATCHLIST_STORAGE_KEY, []),

  add: (movieId) => {
    if (get().movieIds.includes(movieId)) return;
    set({ movieIds: [...get().movieIds, movieId] });
    sendLog('watchlist_add', { movieId });
  },

  remove: (movieId) => {
    set({ movieIds: get().movieIds.filter((id) => id !== movieId) });
    sendLog('watchlist_remove', { movieId });
  },

  toggle: (movieId) => {
    if (get().movieIds.includes(movieId)) get().remove(movieId);
    else get().add(movieId);
  },

  clear: () => {
    sendLog('watchlist_clear', { count: get().movieIds.length });
    set({ movieIds: [] });
  },
}));

// Persist on every change (web equivalent of writing to AsyncStorage).
useWatchlistStore.subscribe((state) => {
  setLocalStorage(WATCHLIST_STORAGE_KEY, state.movieIds);
});

/** Reusable selector factory, e.g. `useWatchlistStore(selectIsInWatchlist(id))`. */
export const selectIsInWatchlist = (movieId: string) => (state: WatchlistState) => state.movieIds.includes(movieId);
