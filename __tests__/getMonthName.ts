import * as fns from '../lib';

describe('getMonthName', () => {
  it('should return name of month (short)', () => {
    const expected = 'Mar';

    const date = new Date('2019-03-06');
    const result = fns.getMonthName(date);

    expect(result).toEqual(expected);
  });
});
