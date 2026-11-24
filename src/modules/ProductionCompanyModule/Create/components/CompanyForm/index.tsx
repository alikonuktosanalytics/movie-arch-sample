import type { FormEvent } from 'react';
import { Button } from '@/components/designSystem/Button';
import { TextInput } from '@/components/designSystem/Input';
import { ERROR_SUMMARY, FIELDS, SUBMIT_LABEL } from './const';
import { countErrors, getFieldHint } from './helpers';
import { styles } from './style';
import type { CompanyFormProps } from './type';

/** Controlled + stateless: values, errors and submit logic belong to the screen. */
export const CompanyForm = ({ values, errors, onChange, onSubmit }: CompanyFormProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit} noValidate>
      <div style={styles.fields}>
        {FIELDS.map((config) => (
          <div key={config.field} style={config.fullWidth ? styles.fullWidth : undefined}>
            <TextInput
              label={config.label}
              placeholder={config.placeholder}
              multiline={config.multiline}
              inputMode={config.inputMode}
              value={values[config.field]}
              error={errors[config.field]}
              hint={getFieldHint(config.field, values)}
              onChangeText={(value) => onChange(config.field, value)}
            />
          </div>
        ))}
      </div>
      <div style={styles.footer}>
        <span style={styles.errorSummary}>{countErrors(errors) > 0 ? ERROR_SUMMARY : ''}</span>
        <Button type="submit" label={SUBMIT_LABEL} />
      </div>
    </form>
  );
};
