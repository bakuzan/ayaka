import getWeekExtreme from './getWeekExtreme';
const weekBeginning = getWeekExtreme((d) => (d === 0 ? -6 : 1));

export default weekBeginning;
