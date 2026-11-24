import { ErrorState } from '../ErrorState';
import type { AsyncContentProps } from './type';

export type { AsyncContentProps } from './type';

/**
 * Single place that maps loading → skeleton, error → ErrorState, success → content.
 * Keeps every screen's index.tsx free of repetitive status branching.
 */
export const AsyncContent = <T,>({ state, skeleton, children }: AsyncContentProps<T>) => {
  if (state.status === 'loading') return <>{skeleton}</>;
  if (state.status === 'error') return <ErrorState message={state.error.message} onRetry={state.reload} />;
  return <>{children(state.data)}</>;
};
