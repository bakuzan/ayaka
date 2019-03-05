const getWeekExtreme = (check: (n: number) => number) => (
  date: string | number | Date
): Date => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + check(day);
  d.setDate(diff);
  return d;
};

export default getWeekExtreme;
