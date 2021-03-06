export const MS_DAY = 60 * 60 * 24 * 1000;

const daysDifferenceBetweenDates = (
  d1: string | number | Date,
  d2: string | number | Date
) => {
  const a = new Date(d1).getTime();
  const b = new Date(d2).getTime();

  return Math.floor(b - a) / MS_DAY;
};

export default daysDifferenceBetweenDates;
