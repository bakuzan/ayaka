import dayNames from './constants/dayNames';

const getDayName = (date: string | number | Date) =>
  dayNames[new Date(date).getDay()];

export default getDayName;
