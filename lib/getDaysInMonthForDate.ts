const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

function getDaysInMonthForDate(date: string | number | Date) {
  const d = new Date(date);
  return daysInMonth(d.getMonth() + 1, d.getFullYear());
}

export default getDaysInMonthForDate;
