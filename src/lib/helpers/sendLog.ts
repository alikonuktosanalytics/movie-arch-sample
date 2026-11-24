import type { LogEntry, LogLevel } from './type';

export type { LogEntry, LogLevel } from './type';

const history: LogEntry[] = [];

/**
 * Web stand-in for the app's analytics / remote logger.
 * Swap the body for a real transport (Firebase, Sentry, own API) without touching callers.
 */
export const sendLog = (event: string, payload: Record<string, unknown> = {}, level: LogLevel = 'info'): LogEntry => {
  const entry: LogEntry = { event, payload, level, timestamp: new Date().toISOString() };
  history.push(entry);

  if (import.meta.env.MODE !== 'test') {
    console[level](`[sendLog] ${event}`, payload);
  }

  return entry;
};

export const getLogHistory = (): LogEntry[] => [...history];
