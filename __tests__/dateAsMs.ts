import * as fns from '../lib';

describe('dateAsMs', () => {
  it('should return date in ms', () => {
    const expected = 1551744000000;

    const date = new Date('2019-03-05');
    const result = fns.dateAsMs(date);

    expect(result).toEqual(expected);
  });
});
