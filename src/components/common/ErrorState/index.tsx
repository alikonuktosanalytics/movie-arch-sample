import { EmptyState } from '../EmptyState';
import { DEFAULT_ERROR_TITLE, ERROR_ICON, RETRY_LABEL } from './const';
import type { ErrorStateProps } from './type';

export type { ErrorStateProps } from './type';

/** Composes EmptyState: common components may build on each other. */
export const ErrorState = ({ title = DEFAULT_ERROR_TITLE, message, onRetry }: ErrorStateProps) => (
  <EmptyState icon={ERROR_ICON} title={title} description={message} actionLabel={onRetry ? RETRY_LABEL : undefined} onAction={onRetry} />
);
