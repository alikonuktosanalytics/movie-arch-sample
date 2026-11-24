import { useId } from 'react';
import { styles } from './style';
import type { FieldShellProps, SelectProps, TextInputProps } from './type';

export type { SelectOption, SelectProps, TextInputMode, TextInputProps } from './type';

const FieldShell = ({ id, label, error, hint, children }: FieldShellProps) => (
  <div style={styles.field}>
    {label && (
      <label htmlFor={id} style={styles.label}>
        {label}
      </label>
    )}
    {children}
    {(error || hint) && (
      <div style={styles.footer}>
        {error && <span style={styles.error}>{error}</span>}
        {hint && <span style={styles.hint}>{hint}</span>}
      </div>
    )}
  </div>
);

export const TextInput = ({ value, onChangeText, label, placeholder, error, hint, multiline, inputMode }: TextInputProps) => {
  const id = useId();
  const controlStyle = { ...styles.control, ...(error ? styles.controlError : {}) };

  return (
    <FieldShell id={id} label={label} error={error} hint={hint}>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChangeText(event.target.value)}
          style={{ ...controlStyle, ...styles.textarea }}
        />
      ) : (
        <input
          id={id}
          value={value}
          placeholder={placeholder}
          inputMode={inputMode}
          type={inputMode === 'search' ? 'search' : 'text'}
          onChange={(event) => onChangeText(event.target.value)}
          style={controlStyle}
        />
      )}
    </FieldShell>
  );
};

export const Select = <T extends string>({ value, options, onChange, label }: SelectProps<T>) => {
  const id = useId();
  return (
    <FieldShell id={id} label={label}>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value as T)} style={styles.control}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
};
