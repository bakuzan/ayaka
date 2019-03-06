import * as fns from '../lib';

describe('getTimeoutSeconds', () => {
  it('should return input number in ms', () => {
    const expected = 1000;

    const result = fns.getTimeoutSeconds(1);

    expect(result).toEqual(expected);
  });
});

describe('getTimeoutMinutes', () => {
  it('should return input number in ms', () => {
    const expected = 1000 * 60;

    const result = fns.getTimeoutMinutes(1);

    expect(result).toEqual(expected);
  });
});
