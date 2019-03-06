import * as fns from '../lib';

describe('isBefore', () => {
  it('should return true if first arg is before second arg', () => {
    const expected = true;

    const date1 = new Date('2019-01-01');
    const date2 = new Date('2019-03-06');
    const result = fns.isBefore(date1, date2);

    expect(result).toEqual(expected);
  });

  it('should return false if first arg is equal to second arg', () => {
    const expected = false;

    const date1 = new Date('2019-03-06');
    const date2 = new Date('2019-03-06');
    const result = fns.isBefore(date1, date2);

    expect(result).toEqual(expected);
  });

  it('should return false if first arg is after to second arg', () => {
    const expected = false;

    const date1 = new Date('2019-03-10');
    const date2 = new Date('2019-03-06');
    const result = fns.isBefore(date1, date2);

    expect(result).toEqual(expected);
  });
});

describe('isBeforeOrEqual', () => {
  it('should return true if first arg is before second arg', () => {
    const expected = true;

    const date1 = new Date('2019-01-01');
    const date2 = new Date('2019-03-06');
    const result = fns.isBeforeOrEqual(date1, date2);

    expect(result).toEqual(expected);
  });

  it('should return true if first arg is equal to second arg', () => {
    const expected = true;

    const date1 = new Date('2019-03-06');
    const date2 = new Date('2019-03-06');
    const result = fns.isBeforeOrEqual(date1, date2);

    expect(result).toEqual(expected);
  });

  it('should return false if first arg is after to second arg', () => {
    const expected = false;

    const date1 = new Date('2019-03-10');
    const date2 = new Date('2019-03-06');
    const result = fns.isBeforeOrEqual(date1, date2);

    expect(result).toEqual(expected);
  });
});
