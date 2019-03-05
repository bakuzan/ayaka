import getDatesAsMsAtMidnight from './getDatesAsMsAtMidnight';

const datesAreEqual = (
  d1: string | Date | number,
  d2: string | Date | number
) => {
  const [dx, dy] = getDatesAsMsAtMidnight(d1, d2);
  return dx === dy;
};

export default datesAreEqual;
