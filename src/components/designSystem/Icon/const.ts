import type { IconName, IconShape } from './type';

export const DEFAULT_ICON_SIZE = 18;
export const DEFAULT_STROKE_WIDTH = 1.8;
export const ICON_VIEWBOX = '0 0 24 24';

/** Outline icons on a 24×24 grid (stroke = currentColor), so they inherit text color. */
export const ICON_SHAPES: Record<IconName, IconShape[]> = {
  film: [
    { type: 'rect', x: 3, y: 3, width: 18, height: 18, rx: 2 },
    { type: 'path', d: 'M7 3v18M17 3v18M3 7.5h4M3 12h18M3 16.5h4M17 7.5h4M17 16.5h4' },
  ],
  tv: [
    { type: 'rect', x: 2, y: 7, width: 20, height: 14, rx: 2 },
    { type: 'path', d: 'm17 2-5 5-5-5' },
  ],
  users: [
    { type: 'path', d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
    { type: 'circle', cx: 9, cy: 7, r: 4 },
    { type: 'path', d: 'M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
  ],
  building: [
    { type: 'rect', x: 4, y: 2, width: 16, height: 20, rx: 2 },
    { type: 'path', d: 'M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01' },
  ],
  bookmark: [{ type: 'path', d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' }],
  search: [
    { type: 'circle', cx: 11, cy: 11, r: 7 },
    { type: 'path', d: 'm21 21-4.3-4.3' },
  ],
  alert: [
    { type: 'circle', cx: 12, cy: 12, r: 10 },
    { type: 'path', d: 'M12 8v4M12 16h.01' },
  ],
  compass: [
    { type: 'circle', cx: 12, cy: 12, r: 10 },
    { type: 'path', d: 'm16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z' },
  ],
  inbox: [
    { type: 'path', d: 'M22 12h-6l-2 3h-4l-2-3H2' },
    { type: 'path', d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' },
  ],
  arrowLeft: [{ type: 'path', d: 'm12 19-7-7 7-7M19 12H5' }],
  arrowRight: [{ type: 'path', d: 'M5 12h14M12 5l7 7-7 7' }],
  check: [{ type: 'path', d: 'M20 6 9 17l-5-5' }],
  plus: [{ type: 'path', d: 'M12 5v14M5 12h14' }],
  star: [{ type: 'path', d: 'm12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z' }],
  trash: [{ type: 'path', d: 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' }],
};
