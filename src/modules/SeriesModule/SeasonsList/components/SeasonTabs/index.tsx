import { getSeasonTabLabel } from './helpers';
import { styles } from './style';
import type { SeasonTabsProps } from './type';

export const SeasonTabs = ({ seasons, selectedNumber, onSelect }: SeasonTabsProps) => (
  <div role="tablist" style={styles.tabs}>
    {seasons.map((season) => {
      const isActive = season.number === selectedNumber;
      return (
        <button
          key={season.number}
          type="button"
          role="tab"
          aria-selected={isActive}
          className="tappable"
          style={{ ...styles.tab, ...(isActive ? styles.tabActive : {}) }}
          onClick={() => onSelect(season.number)}
        >
          {getSeasonTabLabel(season)}
        </button>
      );
    })}
  </div>
);
