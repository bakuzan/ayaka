import * as fns from '../lib';

describe('getDaysInMonthForDate', () => {
  it('should return number of days in month of date', () => {
    const expected = 31;

    const date = new Date('2019-03-06');
    const result = fns.getDaysInMonthForDate(date);

    expect(result).toEqual(expected);
  });

  it('should return number of days in correctly in leap year', () => {
    const expected = 29;

    const date = new Date('2020-02-01');
    const result = fns.getDaysInMonthForDate(date);

    expect(result).toEqual(expected);
  });
});
