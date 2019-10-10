const adjustDateDay = (
  date: string | number | Date,
  adjustment: number
): Date => {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + adjustment);
};

export default adjustDateDay;
