import getWeekExtreme from './getWeekExtreme';
const weekEnding = getWeekExtreme((d) => (d === 0 ? 0 : 7));

export default weekEnding;
