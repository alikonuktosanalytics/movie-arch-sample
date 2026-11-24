import { MOCK_DELAY_MS } from './const';

export { MOCK_DELAY_MS } from './const';

export class NotFoundError extends Error {
  constructor(entity: string, id: string) {
    super(`${entity} "${id}" was not found`);
    this.name = 'NotFoundError';
  }
}

/** Resolves a deep copy of `data` after a delay — mimics an HTTP response. */
export const mockRequest = <T>(data: T, delayMs: number = MOCK_DELAY_MS): Promise<T> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(JSON.parse(JSON.stringify(data)) as T), delayMs);
  });

export const mockFailure = (error: Error, delayMs: number = MOCK_DELAY_MS): Promise<never> =>
  new Promise((_, reject) => {
    setTimeout(() => reject(error), delayMs);
  });
