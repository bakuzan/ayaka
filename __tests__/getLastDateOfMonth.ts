import * as fns from '../lib';

describe('getLastDateOfMonth', () => {
  it('should change date to last of month', () => {
    const date = new Date('2019-03-06');
    const expected = new Date('2019-03-31');

    const result = fns.getLastDateOfMonth(date);

    expect(result).toEqual(expected);
  });

  it('should change date to last of month at year boundary', () => {
    const date = new Date('2019-12-25');
    const expected = new Date('2019-12-31');

    const result = fns.getLastDateOfMonth(date);

    expect(result).toEqual(expected);
  });

  it('should return last of month correctly for leap year february', () => {
    const date = new Date('2020-02-01');
    const expected = new Date('2020-02-29');

    const result = fns.getLastDateOfMonth(date);

    expect(result).toEqual(expected);
  });
});
