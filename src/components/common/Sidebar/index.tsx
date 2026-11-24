import { NavLink } from 'react-router-dom';
import { Icon } from '@/components/designSystem/Icon';
import { ROUTES } from '@/lib/navigation/routes';
import { useWatchlistStore } from '@/store/watchlistStore';
import {
  BRAND_ICON,
  BRAND_ICON_SIZE,
  BRAND_NAME,
  BRAND_SUBTITLE,
  FOOTER_TEXT,
  NAV_ICON_SIZE,
  SIDEBAR_SECTIONS,
} from './const';
import { styles } from './style';

/**
 * App navigation. Desktop: fixed left column. Narrow screens: collapses to a horizontal bar
 * (handled by `.app-sidebar` media query in index.css, since inline styles cannot do @media).
 */
export const Sidebar = () => {
  const watchlistCount = useWatchlistStore((state) => state.movieIds.length);

  return (
    <aside className="app-sidebar" style={styles.sidebar}>
      <NavLink to={ROUTES.movies} style={styles.brand}>
        <span style={styles.brandMark}>
          <Icon name={BRAND_ICON} size={BRAND_ICON_SIZE} />
        </span>
        <span style={styles.brandText}>
          <span style={styles.brandName}>{BRAND_NAME}</span>
          <span className="sidebar-brand-subtitle" style={styles.brandSubtitle}>
            {BRAND_SUBTITLE}
          </span>
        </span>
      </NavLink>

      {SIDEBAR_SECTIONS.map((section) => (
        <nav key={section.title} className="sidebar-section" style={styles.section} aria-label={section.title}>
          <span className="sidebar-section-title" style={styles.sectionTitle}>
            {section.title}
          </span>
          {section.items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="sidebar-link"
              style={({ isActive }) => ({ ...styles.link, ...(isActive ? styles.linkActive : {}) })}
            >
              <Icon name={item.icon} size={NAV_ICON_SIZE} />
              <span style={styles.linkLabel}>{item.label}</span>
              {item.showsWatchlistCount && watchlistCount > 0 && <span style={styles.counter}>{watchlistCount}</span>}
            </NavLink>
          ))}
        </nav>
      ))}

      <span className="sidebar-footer" style={styles.footer}>
        {FOOTER_TEXT}
      </span>
    </aside>
  );
};
