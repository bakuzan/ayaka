const timers = {};

function debounce(f: () => any, t: number): number {
  const key = f.toString();
  clearTimeout(timers[key]);

  timers[key] = setTimeout(() => f(), t);

  return timers[key];
}

export default debounce;
