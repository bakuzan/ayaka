import * as fns from '../lib';

describe('daysDifferenceBetweenDates', () => {
  it('should return number of days difference between dates', () => {
    const expected = 4;

    const date1 = new Date('2019-03-01');
    const date2 = new Date('2019-03-05');
    const result = fns.daysDifferenceBetweenDates(date1, date2);

    expect(result).toEqual(expected);
  });

  it('should return decimal if within 24hrs', () => {
    const expected = 0.9791666666666666;

    const date1 = new Date('2019-03-05T00:00:00.000Z');
    const date2 = new Date('2019-03-05T23:30:00.000Z');
    const result = fns.daysDifferenceBetweenDates(date1, date2);

    expect(result).toEqual(expected);
  });

  it('should return decimal if not an exact number of days', () => {
    const expected = 7.979166666666667;

    const date1 = new Date('2019-03-05T00:00:00.000Z');
    const date2 = new Date('2019-03-12T23:30:00.000Z');
    const result = fns.daysDifferenceBetweenDates(date1, date2);

    expect(result).toEqual(expected);
  });
});
