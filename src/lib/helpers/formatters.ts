/** Shared, app-wide pure formatters. Screen-specific formatting belongs in the screen's helpers.ts. */

export const formatRuntime = (minutes: number): string => {
  if (minutes <= 0) return '0m';
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours === 0) return `${rest}m`;
  if (rest === 0) return `${hours}h`;
  return `${hours}h ${rest}m`;
};

export const formatRating = (rating: number): string => rating.toFixed(1);

export const formatYearRange = (start: number, end: number | null): string => {
  if (end === null) return `${start}–present`;
  if (start === end) return `${start}`;
  return `${start}–${end}`;
};

export const pluralize = (count: number, singular: string, plural = `${singular}s`): string =>
  `${count} ${count === 1 ? singular : plural}`;

export const formatDate = (isoDate: string): string =>
  new Date(isoDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

/** Lower-cases, trims and strips diacritics so "Amélie" matches "amelie". */
export const normalizeText = (value: string): string =>
  value
    .trim()
    .toLocaleLowerCase('en-US')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
