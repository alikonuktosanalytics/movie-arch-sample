import { sendLog } from './sendLog';

/**
 * Web equivalent of the RN app's `setAsyncStorage`.
 * Returns false instead of throwing so callers never crash on quota / private mode errors.
 */
export const setLocalStorage = <T>(key: string, value: T): boolean => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    sendLog('storage_write_failed', { key, error: String(error) }, 'warn');
    return false;
  }
};
