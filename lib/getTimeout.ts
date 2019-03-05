export const getTimeoutSeconds = (s: number): number => 1000 * s;
export const getTimeoutMinutes = (m: number): number =>
  getTimeoutSeconds(60) * m;
