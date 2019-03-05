const getFirstDateOfMonth = (date: string | number | Date) => {
  const d = new Date(date);
  d.setDate(1);
  return d;
};

export default getFirstDateOfMonth;
