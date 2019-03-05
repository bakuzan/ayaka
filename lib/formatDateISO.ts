import formatDateForInput from './formatDateForInput';
import formatTime from './formatTime';

const formatDateISO = (d: string | number | Date) =>
  `${formatDateForInput(d)}T${formatTime(d)}`;

export default formatDateISO;
