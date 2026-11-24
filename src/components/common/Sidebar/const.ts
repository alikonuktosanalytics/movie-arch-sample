import type { IconName } from '@/components/designSystem/Icon';
import { ROUTES } from '@/lib/navigation/routes';
import type { SidebarSection } from './type';

export const BRAND_NAME = 'MovieArch';
export const BRAND_SUBTITLE = 'Architecture sample';
export const BRAND_ICON: IconName = 'film';
export const BRAND_ICON_SIZE = 16;
export const NAV_ICON_SIZE = 17;
export const FOOTER_TEXT = 'Mock data · offline-ready';

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    title: 'Browse',
    items: [
      { to: ROUTES.movies, label: 'Movies', icon: 'film' },
      { to: ROUTES.series, label: 'Series', icon: 'tv' },
      { to: ROUTES.actors, label: 'Actors', icon: 'users' },
      { to: ROUTES.companies, label: 'Companies', icon: 'building' },
    ],
  },
  {
    title: 'Library',
    items: [{ to: ROUTES.watchlist, label: 'Watchlist', icon: 'bookmark', showsWatchlistCount: true }],
  },
];
