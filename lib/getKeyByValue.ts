const getKeyByValue = (o: object, v: any): string =>
  Object.keys(o).find((k) => o[k] === v);

export default getKeyByValue;
