const getSingleObjectProperty = (o: object): string =>
  !!o ? o[Object.keys(o)[0]] : null;

export default getSingleObjectProperty;
