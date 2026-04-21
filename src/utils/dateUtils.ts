export const formatDate = (input: string) => new Date(input).toLocaleDateString();

export const toISO = (date: Date) => date.toISOString();
