import daysDifferenceBetweenDates from './daysDifferenceBetweenDates';
import weekBeginning from './getWeekBeginning';

const daysDifferenceFromMonday = (date: string | number | Date) =>
  Math.abs(daysDifferenceBetweenDates(date, weekBeginning(date)));

export default daysDifferenceFromMonday;
