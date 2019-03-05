import padNumber from './padNumber';

export default function formatTime(date: string | number | Date) {
  return date
    ? `${padNumber(new Date(date).getHours(), 2)}:${padNumber(
        new Date(date).getMinutes(),
        2
      )}`
    : '';
}
