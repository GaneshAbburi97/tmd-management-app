import { clamp, formatPercent } from './helpers';

describe('helpers', () => {
  it('clamps values within a range', () => {
    expect(clamp(12, 1, 10)).toBe(10);
    expect(clamp(-1, 1, 10)).toBe(1);
    expect(clamp(5, 1, 10)).toBe(5);
  });

  it('formats percentage values', () => {
    expect(formatPercent(42.4)).toBe('42%');
  });
});
