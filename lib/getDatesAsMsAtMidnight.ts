import startOfDay from './startOfDay';

const getDatesAsMsAtMidnight = (...dates: any[]): number[] => {
  return dates.map((d: string | number | Date) =>
    startOfDay(new Date(d)).getTime()
  );
};

export default getDatesAsMsAtMidnight;
