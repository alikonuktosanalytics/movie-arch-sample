import { Button } from '@/components/designSystem/Button';
import { Select, TextInput } from '@/components/designSystem/Input';
import { INITIAL_FILTERS } from '../../const';
import { RESET_LABEL, SEARCH_LABEL, SEARCH_PLACEHOLDER, SORT_LABEL, SORT_OPTIONS } from './const';
import { buildGenreOptions, hasActiveFilters } from './helpers';
import { styles } from './style';
import type { MovieFilterBarProps } from './type';

/** Controlled component: owns no state, reports every change to the screen. */
export const MovieFilterBar = ({ filters, genres, onChange, onReset }: MovieFilterBarProps) => (
  <section style={styles.container}>
    <div style={styles.controls}>
      <TextInput
        label={SEARCH_LABEL}
        placeholder={SEARCH_PLACEHOLDER}
        inputMode="search"
        value={filters.query}
        onChangeText={(query) => onChange({ ...filters, query })}
      />
      <Select
        label={SORT_LABEL}
        value={filters.sort}
        options={SORT_OPTIONS}
        onChange={(sort) => onChange({ ...filters, sort })}
      />
    </div>
    <div style={styles.chips}>
      {buildGenreOptions(genres).map((option) => (
        <button
          key={option.value}
          type="button"
          className="tappable"
          aria-pressed={filters.genre === option.value}
          style={{ ...styles.chip, ...(filters.genre === option.value ? styles.chipActive : {}) }}
          onClick={() => onChange({ ...filters, genre: option.value })}
        >
          {option.label}
        </button>
      ))}
      <Button
        label={RESET_LABEL}
        variant="ghost"
        size="small"
        disabled={!hasActiveFilters(filters, INITIAL_FILTERS)}
        onPress={onReset}
      />
    </div>
  </section>
);
