import formatDateForDisplay from './formatDateForDisplay';
import formatTime from './formatTime';

export default function formatDateTimeForDisplay(date: string | number | Date) {
  return `${formatDateForDisplay(date)} @ ${formatTime(date)}`;
}
