import * as fns from '../lib';

describe('debounce', () => {
  let result = null;

  afterEach(() => {
    clearTimeout(result);
  });

  it('should return timeout id', () => {
    const expected = typeof 0;

    result = fns.debounce(() => {}, 1000);

    expect(typeof result).toEqual(expected);
  });

  it('should call function after provided timeout', () => {
    const expected = new Date().getTime() + 1000;

    result = fns.debounce(() => {
      expect(new Date().getTime()).toEqual(expected);
    }, 1000);
  });

  it('should cancel timeout if cleared externally', () => {
    const mockedFn = jest.fn(() => null);
    result = fns.debounce(mockedFn, 1000);

    clearTimeout(result);

    expect(mockedFn).not.toHaveBeenCalled();
  });
});
