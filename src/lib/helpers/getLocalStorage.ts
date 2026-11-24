import { sendLog } from './sendLog';

/**
 * Web equivalent of the RN app's `getAsyncStorage`.
 * Returns the parsed JSON value or `fallback` when the key is missing / unreadable.
 */
export const getLocalStorage = <T>(key: string, fallback: T): T => {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch (error) {
    sendLog('storage_read_failed', { key, error: String(error) }, 'warn');
    return fallback;
  }
};
