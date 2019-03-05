import * as fns from '../lib';

describe('daysDifferenceFromMonday', () => {
  it('should return 0 if is monday', () => {
    const expected = 0;

    const date = new Date('2019-03-04');
    const result = fns.daysDifferenceFromMonday(date);

    expect(result).toEqual(expected);
  });

  it('should return 6 if is sunday', () => {
    const expected = 6;

    const date = new Date('2019-03-03');
    const result = fns.daysDifferenceFromMonday(date);

    expect(result).toEqual(expected);
  });
});
