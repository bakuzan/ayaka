import * as fns from '../lib';

describe('formatTime', () => {
  it('should return  empty string if falsey input', () => {
    const expected = '';

    const result = fns.formatTime(undefined);

    expect(result).toEqual(expected);
  });

  it('should format date to time string (HH:mm)', () => {
    const expected = '12:34';

    const date = new Date('2019-03-06T12:34:00.000Z');
    const result = fns.formatTime(date);

    expect(result).toEqual(expected);
  });
});
