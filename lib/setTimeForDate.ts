const setTimeForDate =
  (h: number, m: number, s: number) =>
  (date: string | number | Date): Date => {
    const d = new Date(date);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, m, s);
  };

export default setTimeForDate;
