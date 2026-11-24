import { useCallback, useEffect, useState, type DependencyList } from 'react';

import type { AsyncState, UseAsyncResult } from './type';

export type { AsyncState, UseAsyncResult } from './type';

/**
 * Runs an async loader (a service call) and exposes loading / success / error state.
 * Screens call services ONLY through this hook (or event handlers) — never from helpers.
 */
export const useAsync = <T>(loader: () => Promise<T>, deps: DependencyList): UseAsyncResult<T> => {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading' });

    loader()
      .then((data) => {
        if (!cancelled) setState({ status: 'success', data });
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setState({ status: 'error', error: error instanceof Error ? error : new Error(String(error)) });
        }
      });

    return () => {
      cancelled = true;
    };
    // The caller controls re-fetching through `deps`, exactly like useEffect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, attempt]);

  const reload = useCallback(() => setAttempt((value) => value + 1), []);

  return { ...state, reload };
};
