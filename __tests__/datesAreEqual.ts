import * as fns from '../lib';

describe('datesAreEqual', () => {
  it('should return true if dates match', () => {
    const expected = true;

    const date = new Date('2019-03-05');
    const result = fns.datesAreEqual(date, date);

    expect(result).toEqual(expected);
  });

  it('should return true if dates are within 24hrs', () => {
    const expected = true;

    const date1 = new Date('2019-03-05T00:00:00.000Z');
    const date2 = new Date('2019-03-05T12:00:00.000Z');
    const result = fns.datesAreEqual(date1, date2);

    expect(result).toEqual(expected);
  });

  it('should return false if dates do not match', () => {
    const expected = false;

    const date1 = new Date('2019-03-05T00:00:00.000Z');
    const date2 = new Date('2019-03-06T12:00:00.000Z');
    const result = fns.datesAreEqual(date1, date2);

    expect(result).toEqual(expected);
  });
});
