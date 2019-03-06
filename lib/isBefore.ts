import areEqual from './datesAreEqual';
import getDatesAsMsAtMidnight from './getDatesAsMsAtMidnight';

export const isBefore = (
  d1: string | number | Date,
  d2: string | number | Date
) => {
  const [dx, dy] = getDatesAsMsAtMidnight(d1, d2);
  const before = dx < dy;
  return before;
};

export const isBeforeOrEqual = (
  d1: string | number | Date,
  d2: string | number | Date
) => isBefore(d1, d2) || areEqual(d1, d2);
