const get = (from: any, ...selectors: string[]) =>
  [...selectors].map((s) =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.') // eslint-disable-line
      .split('.')
      .filter((t) => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );

const orderBy = (arr: any[], props: string[], orders: string[] = []) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      const aVal = get(a, prop)[0];
      const bVal = get(b, prop)[0];
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === 'desc' ? [bVal, aVal] : [aVal, bVal];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );

export default orderBy;
