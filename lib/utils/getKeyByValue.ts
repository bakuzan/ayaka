const getKeyByValue = (o: Object, v: any): string =>
  Object.keys(o).find((k) => o[k] === v);

export default getKeyByValue;
