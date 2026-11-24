import { describe, expect, it } from 'vitest';
import { INITIAL_VALUES, LIMITS } from '../../../const';
import { countErrors, getFieldHint } from '../helpers';

describe('getFieldHint', () => {
  it('shows a character counter only for the description', () => {
    expect(getFieldHint('description', { ...INITIAL_VALUES, description: 'hello' })).toBe(`5 / ${LIMITS.descriptionMax}`);
    expect(getFieldHint('name', INITIAL_VALUES)).toBeUndefined();
  });
});

describe('countErrors', () => {
  it('counts only fields with a message', () => {
    expect(countErrors({})).toBe(0);
    expect(countErrors({ name: 'Required', country: undefined, foundedYear: 'Bad year' })).toBe(2);
  });
});
