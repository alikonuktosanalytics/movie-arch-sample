export type LogLevel = 'info' | 'warn' | 'error';

export interface LogEntry {
  event: string;
  payload: Record<string, unknown>;
  level: LogLevel;
  timestamp: string;
}
