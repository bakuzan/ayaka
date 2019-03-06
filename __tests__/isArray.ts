import * as fns from '../lib';

describe('isArray', () => {
  it('should return true if is array instance', () => {
    const expected = true;

    const result = fns.isArray([]);

    expect(result).toEqual(expected);
  });

  it('should return false if not an instance of an array', () => {
    const expected = false;

    const results = [
      fns.isArray(undefined),
      fns.isArray({}),
      fns.isArray('a string'),
      fns.isArray(44),
      fns.isArray(new Date())
    ];

    results.forEach((result) => expect(result).toEqual(expected));
  });
});
