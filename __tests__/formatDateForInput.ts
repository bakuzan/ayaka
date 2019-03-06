import * as fns from '../lib';

describe('formatDateForInput', () => {
  it('should return empty string for falsey inputs', () => {
    const expected = '';

    const results = [
      fns.formatDateForInput(undefined),
      fns.formatDateForInput(null)
    ];

    results.forEach((result) => expect(result).toEqual(expected));
  });

  it('should format date to YYYY-MM-DD', () => {
    const expected = '2019-03-06';

    const date = new Date('2019-03-06');
    const result = fns.formatDateForInput(date);

    expect(result).toEqual(expected);
  });

  it('should re-format string to YYYY-MM-DD', () => {
    const expected = '2019-03-06';

    const date = new Date('2019-03-06').toISOString();
    const result = fns.formatDateForInput(date);

    expect(result).toEqual(expected);
  });
});
