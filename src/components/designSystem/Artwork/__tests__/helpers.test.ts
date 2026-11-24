import { describe, expect, it } from 'vitest';
import { getGradient, getInitials, hashString, shouldShowImage } from '../helpers';

describe('getInitials', () => {
  it('skips stop words and punctuation', () => {
    expect(getInitials('The Dark Knight')).toBe('DK');
    expect(getInitials('Mad Max: Fury Road')).toBe('MM');
    expect(getInitials("...And the Bag's in the River")).toBe('BI');
  });

  it('uses the first letters of a single word', () => {
    expect(getInitials('Joker')).toBe('JO');
    expect(getInitials('A24')).toBe('A2');
  });

  it('falls back to stop words, then to "?"', () => {
    expect(getInitials('The A')).toBe('TA');
    expect(getInitials('   ')).toBe('?');
  });
});

describe('hashString / getGradient', () => {
  it('is deterministic', () => {
    expect(hashString('Inception')).toBe(hashString('Inception'));
    expect(getGradient('Inception')).toBe(getGradient('Inception'));
  });

  it('produces different gradients for different seeds', () => {
    expect(getGradient('Inception')).not.toBe(getGradient('Interstellar'));
  });
});

describe('shouldShowImage', () => {
  it('hides the image when there is no url', () => {
    expect(shouldShowImage(undefined, undefined)).toBe(false);
    expect(shouldShowImage('', undefined)).toBe(false);
  });

  it('shows the image until that exact url fails', () => {
    expect(shouldShowImage('https://img/a.jpg', undefined)).toBe(true);
    expect(shouldShowImage('https://img/a.jpg', 'https://img/a.jpg')).toBe(false);
  });

  it('retries when the url changes after a failure', () => {
    expect(shouldShowImage('https://img/b.jpg', 'https://img/a.jpg')).toBe(true);
  });
});
