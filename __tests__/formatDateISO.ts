import * as fns from '../lib';

describe('formatDateISO', () => {
  it('should format date to custom "ISO String"', () => {
    const expected = '2019-03-06T00:00';

    const date = new Date('2019-03-06');
    const result = fns.formatDateISO(date);

    expect(result).toEqual(expected);
  });
});
