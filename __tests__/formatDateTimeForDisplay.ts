import * as fns from '../lib';

describe('formatDateTimeForDisplay', () => {
  it('should format date to datetime display', () => {
    const expected = '06 Mar 2019 @ 12:34';

    const date = new Date('2019-03-06T12:34:00.000Z');
    const result = fns.formatDateTimeForDisplay(date);

    expect(result).toEqual(expected);
  });
});
