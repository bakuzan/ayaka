import * as fns from '../lib';

describe('objectsAreEqual', () => {
  it('should return true if args are equal', () => {
    const expected = true;

    const items = ['ayaka', [], {}, 44, new Date()];
    const results = items.map((item) => fns.objectsAreEqual(item, item));

    results.forEach((result) => expect(result).toEqual(expected));
  });

  it('should return false for inequal items', () => {
    const expected = false;

    const items = ['ayaka', [1, 2], {}, 44, new Date()];
    const results = items.map((item, i) =>
      fns.objectsAreEqual(item, item[i + 1] || item[0])
    );

    results.forEach((result) => expect(result).toEqual(expected));
  });

  it('should return false for objects with different keys', () => {
    const expected = false;

    const item1 = { name: 'ayaka', age: 17 };
    const item2 = { name: 'ayaka', age: 17, height: 183 };
    const result = fns.objectsAreEqual(item1, item2);

    expect(result).toEqual(expected);
  });

  it('should return false for objects with different values', () => {
    const expected = false;

    const item1 = { name: 'ayaka', places: ['school', 'home'] };
    const results = [
      fns.objectsAreEqual(item1, { ...item1, places: 'school,home' }),
      fns.objectsAreEqual(item1, { ...item1, places: ['home'] })
    ];

    results.forEach((result) => expect(result).toEqual(expected));
  });

  it('should return true for arrays with same objects', () => {
    const expected = true;

    const item1 = [
      { name: 'ayaka', places: ['school', 'home'] },
      { name: 'ayaka', age: 17 },
      3456
    ];
    const item2 = [
      { name: 'ayaka', places: ['school', 'home'] },
      { name: 'ayaka', age: 17 },
      3456
    ];
    const result = fns.objectsAreEqual(item1, item1);

    expect(result).toEqual(expected);
  });

  it('should return false for arrays with different values', () => {
    const expected = false;

    const item1 = [1, 2, 3];
    const item2 = [1, 2, 4];
    const result = fns.objectsAreEqual(item1, item2);

    expect(result).toEqual(expected);
  });

  it('should return false for arrays with different lengths', () => {
    const expected = false;

    const item1 = [1, 2];
    const item2 = [1, 2, 4];
    const result = fns.objectsAreEqual(item1, item2);

    expect(result).toEqual(expected);
  });
});
