import * as fns from '../lib';

describe('getSingleObjectProperty', () => {
  it('should return null if passed falsey value', () => {
    const expected = null;

    const result = fns.getSingleObjectProperty(undefined);

    expect(result).toEqual(expected);
  });

  it('should return only key value on object', () => {
    const obj = { name: 'ayaka' };
    const expected = 'ayaka';

    const result = fns.getSingleObjectProperty(obj);

    expect(result).toEqual(expected);
  });

  it('should return first key value on object', () => {
    const obj = { name: 'ayaka', age: 17, height: 183 };
    const expected = 'ayaka';

    const result = fns.getSingleObjectProperty(obj);

    expect(result).toEqual(expected);
  });
});
