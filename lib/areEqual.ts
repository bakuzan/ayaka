import getDatesAsMsAtMidnight from './getDatesAsMsAtMidnight';

const areEqual = (d1, d2) => {
  const [dx, dy] = getDatesAsMsAtMidnight(d1, d2);
  return dx === dy;
};

export default areEqual;
