import monthNames from './constants/monthNames';

const getMonthName = (date: string | number | Date) =>
  monthNames[new Date(date).getMonth()];

export default getMonthName;
