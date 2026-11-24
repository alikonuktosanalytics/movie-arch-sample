export const isDefined = <T>(value: T | null | undefined): value is T => value !== null && value !== undefined;

/** Returns the most frequent item; ties are resolved by first occurrence. */
export const mostFrequent = <T>(items: T[]): T | null => {
  const counts = new Map<T, number>();
  let best: T | null = null;
  let bestCount = 0;
  for (const item of items) {
    const count = (counts.get(item) ?? 0) + 1;
    counts.set(item, count);
    if (count > bestCount) {
      best = item;
      bestCount = count;
    }
  }
  return best;
};
