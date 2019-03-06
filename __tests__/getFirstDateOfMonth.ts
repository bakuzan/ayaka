import * as fns from '../lib';

describe('getFirstDateOfMonth', () => {
  it('should return change date to first of month', () => {
    const date = new Date('2019-03-06');
    const expected = new Date('2019-03-01');

    const result = fns.getFirstDateOfMonth(date);

    expect(result).toEqual(expected);
  });
});
