import daysDifferenceBetweenDates from './daysDifferenceBetweenDates';
import weekEnding from './getWeekEnding';

const daysDifferenceFromSunday = (date: string | number | Date) =>
  Math.abs(daysDifferenceBetweenDates(weekEnding(date), date));

export default daysDifferenceFromSunday;
