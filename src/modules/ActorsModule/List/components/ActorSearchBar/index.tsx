import { Select, TextInput } from '@/components/designSystem/Input';
import { SEARCH_LABEL, SEARCH_PLACEHOLDER, SORT_LABEL, SORT_OPTIONS } from './const';
import { styles } from './style';
import type { ActorSearchBarProps } from './type';

export const ActorSearchBar = ({ filters, onChange }: ActorSearchBarProps) => (
  <section style={styles.container}>
    <TextInput
      label={SEARCH_LABEL}
      placeholder={SEARCH_PLACEHOLDER}
      inputMode="search"
      value={filters.query}
      onChangeText={(query) => onChange({ ...filters, query })}
    />
    <Select label={SORT_LABEL} value={filters.sort} options={SORT_OPTIONS} onChange={(sort) => onChange({ ...filters, sort })} />
  </section>
);
