import * as fns from '../lib';

describe('getDayName', () => {
  it('should return name of day of week', () => {
    const expected = 'Wednesday';

    const date = new Date('2019-03-06');
    const result = fns.getDayName(date);

    expect(result).toEqual(expected);
  });
});
