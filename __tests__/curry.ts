import * as fns from '../lib';

describe('curry', () => {
  function add(a: number, b: number) {
    return a + b;
  }

  it('should returns a curried version of passed function', () => {
    const result = fns.curry(add);

    expect(typeof result).toEqual(typeof add);
  });

  it('should returns a partial executed function', () => {
    const add3 = fns.curry(add, 3);

    const result = add3(2);

    expect(result).toEqual(5);
  });
});
