export const sum = (values: number[]): number => values.reduce((total, value) => total + value, 0);

export const average = (values: number[]): number => (values.length === 0 ? 0 : sum(values) / values.length);

export const roundTo = (value: number, decimals: number): number => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};
