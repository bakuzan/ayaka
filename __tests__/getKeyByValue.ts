import * as fns from '../lib';

describe('getKeyByValue', () => {
  const obj = { name: 'ayaka', age: 17, height: 183 };

  it('should return property name that has value of input', () => {
    const expected = 'age';

    const result = fns.getKeyByValue(obj, 17);

    expect(result).toEqual(expected);
  });

  it('should return undefined if no match found', () => {
    const expected = undefined;

    const result = fns.getKeyByValue(obj, 'witch');

    expect(result).toEqual(expected);
  });
});
