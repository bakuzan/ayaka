import padNumber from './padNumber';

const formatDateForInput = (d: string | number | Date) => {
  if (!d) {
    return '';
  }

  const date = new Date(d);
  return `${date.getFullYear()}-${padNumber(
    date.getMonth() + 1,
    2
  )}-${padNumber(date.getDate(), 2)}`;
};

export default formatDateForInput;
