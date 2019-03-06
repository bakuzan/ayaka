import * as fns from '../lib';

describe('updateSameAsObject', () => {
  const obj = { name: 'ayaka', age: 17, height: 183 };

  it('should return input if falsey update input', () => {
    const expected = [undefined, null, false];

    const updates = [undefined, null, false];
    const results = updates.map((x) => fns.updateSameAsObject(obj, x as any));

    expect(results).toEqual(expected);
  });

  it('should return true if no updates', () => {
    const expected = true;

    const updates = { age: 17 };
    const result = fns.updateSameAsObject(obj, updates);

    expect(result).toEqual(expected);
  });

  it('should return false if new property', () => {
    const expected = false;

    const updates = { colour: 'green' };
    const result = fns.updateSameAsObject(obj, updates);

    expect(result).toEqual(expected);
  });

  it('should return false if changed property', () => {
    const expected = false;

    const updates = { age: '18' };
    const result = fns.updateSameAsObject(obj, updates);

    expect(result).toEqual(expected);
  });
});
