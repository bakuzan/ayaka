const adjustDateYear = (
  date: string | number | Date,
  adjustment: number
): Date => {
  const d = new Date(date);
  return new Date(d.getFullYear() + adjustment, d.getMonth(), d.getDate());
};

export default adjustDateYear;
