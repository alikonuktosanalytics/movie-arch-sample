import type { ReactNode } from 'react';

export interface FieldShellProps {
  id: string;
  label?: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}

export type TextInputMode = 'text' | 'numeric' | 'search';

export interface TextInputProps {
  value: string;
  onChangeText: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  hint?: string;
  multiline?: boolean;
  inputMode?: TextInputMode;
}

export interface SelectOption<T extends string> {
  value: T;
  label: string;
}

export interface SelectProps<T extends string> {
  value: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
  label?: string;
}
