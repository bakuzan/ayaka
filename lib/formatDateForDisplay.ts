import monthNames from './constants/monthNames';

import padNumber from './padNumber';

export default function formatDateForDisplay(date: string | number | Date) {
  if (!date) {
    return '';
  }

  const d = new Date(date);
  return `${padNumber(d.getDate(), 2)} ${
    monthNames[d.getMonth()]
  } ${d.getFullYear()}`;
}
