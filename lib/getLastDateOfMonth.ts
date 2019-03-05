const getLastDateOfMonth = (date: string | number | Date) => {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
};

export default getLastDateOfMonth;
