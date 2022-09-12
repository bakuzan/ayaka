/* eslint-disable @typescript-eslint/no-empty-function */
import * as fns from '../lib';

describe('debounce', () => {
  let result: number | null = null;

  function checkTimeoutCalled() {
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  }

  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should return timeout id', () => {
    const expected = typeof 0;

    result = fns.debounce(() => {}, 1000);

    checkTimeoutCalled();
    expect(typeof result).toEqual(expected);
  });

  it('should call function after provided timeout', () => {
    const mockedFn = jest.fn();

    result = fns.debounce(mockedFn, 1000);

    jest.runAllTimers();

    checkTimeoutCalled();
    expect(mockedFn).toHaveBeenCalled();
  });

  it('should cancel timeout if cleared externally', () => {
    const mockedFn = jest.fn();
    result = fns.debounce(mockedFn, 1000);

    clearTimeout(result);

    checkTimeoutCalled();
    expect(mockedFn).not.toHaveBeenCalled();
  });
});
