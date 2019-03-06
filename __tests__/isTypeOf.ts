import * as fns from '../lib';

describe('isTypeOf', () => {
  it('should return a function', () => {
    const expected = typeof (() => null);

    const result = fns.isTypeOf('object');

    expect(typeof result).toEqual(expected);
  });

  it('should execute and return a bool', () => {
    const expected = false;

    const result = fns.isTypeOf('object')('my test string');

    expect(result).toEqual(expected);
  });
});
