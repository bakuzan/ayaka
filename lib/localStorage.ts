export const getObjectFromLocalStorageByProperty = (property: string): object =>
  JSON.parse(localStorage.getItem(property)) || null;

export const persistObjectToLocalStorage = (property: string) => (
  newValues: object
): object => {
  const values = getObjectFromLocalStorageByProperty(property) || {};
  const updated = { ...values, ...newValues };
  localStorage.setItem(property, JSON.stringify(updated));
  return updated;
};
