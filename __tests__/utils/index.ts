export function datesMatch(d1: Date, d2: Date) {
  expect(d1.getDate()).toEqual(d2.getDate());
  expect(d1.getMonth()).toEqual(d2.getMonth());
  expect(d1.getFullYear()).toEqual(d2.getFullYear());
}
