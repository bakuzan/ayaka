import 'jest-localstorage-mock';
import * as fns from '../lib';

describe('Storage', () => {
  const STORE_KEY = 'AYAKA_TEST';
  const STORE_DEFAULTS = {
    name: 'ayaka',
    age: 17,
    height: 183
  };
  const store = new fns.Store(STORE_KEY, STORE_DEFAULTS);

  beforeEach(() => {
    localStorage.clear();
  });

  // New
  it('should create store instance', () => {
    const s = new fns.Store(STORE_KEY, {
      name: 'ayaka',
      age: 17,
      height: 183
    });

    expect(s instanceof fns.Store).toBeTruthy();
  });

  // Get
  it('should return defaults on get call without prior values', () => {
    const result = store.get();

    expect(result).toEqual(STORE_DEFAULTS);
    expect(localStorage.getItem).toHaveBeenCalledWith(STORE_KEY);
  });

  // GetKey
  it('should return key value for defaults', () => {
    const parseSpy = jest.spyOn(JSON, 'parse');

    const result = store.getKey('age');

    expect(result).toEqual(STORE_DEFAULTS.age);
    expect(localStorage.getItem).toHaveBeenCalledWith(STORE_KEY);
    expect(parseSpy).not.toHaveBeenCalled();
  });

  it('should return key value for defaults when none in stored object', () => {
    localStorage.setItem(STORE_KEY, '{ "name": "ayaka" }'); // Put some data in store
    const parseSpy = jest.spyOn(JSON, 'parse');

    const result = store.getKey('age');

    expect(result).toEqual(STORE_DEFAULTS.age);
    expect(localStorage.getItem).toHaveBeenCalledWith(STORE_KEY);
    expect(parseSpy).toHaveBeenCalled();
  });

  it('should return key value for stored object', () => {
    localStorage.setItem(STORE_KEY, '{ "age": 44 }'); // Put some data in store
    const parseSpy = jest.spyOn(JSON, 'parse');

    const result = store.getKey('age');

    expect(result).toEqual(44);
    expect(localStorage.getItem).toHaveBeenCalledWith(STORE_KEY);
    expect(parseSpy).toHaveBeenCalled();
  });

  // Set
  it('should return updated values on set', () => {
    const values = { age: 18 };

    const expected = { ...STORE_DEFAULTS, ...values };
    const expectedStr = JSON.stringify({ ...STORE_DEFAULTS, ...values });

    const result = store.set(values);

    expect(result).toEqual(expected);
    expect(localStorage.setItem).toHaveBeenCalledWith(STORE_KEY, expectedStr);
    expect(localStorage.__STORE__[STORE_KEY]).toBe(expectedStr);
  });

  // Replace
  it('should return replaced values on replace', () => {
    const input = { name: 'ayaka', age: 18, height: 185 };
    const expected = JSON.stringify(input);

    const result = store.replace(input);

    expect(result).toEqual(input);
    expect(localStorage.setItem).toHaveBeenCalledWith(STORE_KEY, expected);
    expect(localStorage.__STORE__[STORE_KEY]).toBe(expected);
  });

  // Upgrade
  it('should return upgrade data in localStorage', () => {
    const input = { ...STORE_DEFAULTS, test: 'UPGRADE' };
    const expected = JSON.stringify(input);

    store.upgrade(() => input);

    const result = store.get();

    expect(result).toEqual(input);
    expect(localStorage.setItem).toHaveBeenCalledWith(STORE_KEY, expected);
    expect(localStorage.__STORE__[STORE_KEY]).toBe(expected);
  });

  it('should return upgrade data when passed multiple functions in localStorage', () => {
    const input = { ...STORE_DEFAULTS, test: 'UPGRADE' };
    const expected = JSON.stringify({ ...input, value: 2 });

    store.upgrade(
      () => ({ ...input, value: 1 }),
      (d: any) => ({ ...d, value: d.value + 1 })
    );

    const result = store.get();

    expect(result).toEqual({ ...input, value: 2 });
    expect(localStorage.setItem).toHaveBeenCalledWith(STORE_KEY, expected);
    expect(localStorage.__STORE__[STORE_KEY]).toBe(expected);
  });
});
