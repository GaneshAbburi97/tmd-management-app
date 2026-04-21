export const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const formatPercent = (value: number) => `${Math.round(value)}%`;
