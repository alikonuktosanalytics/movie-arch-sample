import { buildRoute } from '@/lib/navigation/routes';
import { ROOT_LABEL } from './const';
import type { BreadcrumbInput, BreadcrumbItem } from './type';

/**
 * Builds the trail for any depth of the Series flow:
 * All series → Breaking Bad → Season 1 → S01E02 · Title
 * Every item links except the deepest one.
 */
export const buildSeriesBreadcrumb = ({ series, seasonNumber, episode }: BreadcrumbInput): BreadcrumbItem[] => {
  const items: BreadcrumbItem[] = [{ label: ROOT_LABEL, to: buildRoute.series() }];
  if (series) {
    items.push({ label: series.title, to: buildRoute.seriesSeasons(series.id) });
    if (seasonNumber !== undefined) {
      items.push({ label: `Season ${seasonNumber}`, to: buildRoute.seriesSeasons(series.id, seasonNumber) });
    }
  }
  if (episode) {
    items.push({ label: `${episode.code} · ${episode.title}` });
  }

  const last = items[items.length - 1];
  items[items.length - 1] = { label: last.label };
  return items;
};
