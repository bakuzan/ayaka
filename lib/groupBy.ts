export default function groupBy<T>(list: T[], keyGetter = (x: T): any => x) {
  const map = new Map<any, T[]>();

  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);

    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });

  return map;
}
