import weekBeginning from './getWeekBeginning';
import weekEnding from './getWeekEnding';

export const MS_DAY = 60 * 60 * 24 * 1000;

export const daysDifferentBetweenDates = (
  d1: string | number | Date,
  d2: string | number | Date
) => {
  const a = new Date(d1).getTime();
  const b = new Date(d2).getTime();

  return Math.floor(b - a) / MS_DAY;
};

export const getDifferenceFromMonday = (date: string | number | Date) =>
  Math.abs(daysDifferentBetweenDates(date, weekBeginning(date)));

export const getDifferenceFromSunday = (date: string | number | Date) =>
  Math.abs(daysDifferentBetweenDates(weekEnding(date), date));
