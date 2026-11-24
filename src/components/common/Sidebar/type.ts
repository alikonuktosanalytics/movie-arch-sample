import type { IconName } from '@/components/designSystem/Icon';

export interface SidebarItem {
  to: string;
  label: string;
  icon: IconName;
  /** Shows the watchlist size next to the item. */
  showsWatchlistCount?: boolean;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}
