const updateSameAsObject = (o: object, u: object) =>
  u &&
  Object.keys(u)
    .map((k) => o[k] === u[k])
    .every((x) => x === true);

export default updateSameAsObject;
