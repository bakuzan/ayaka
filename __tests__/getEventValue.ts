import * as fns from '../lib';

describe('getEventValue', () => {
  const target = {
    value: 'some value',
    checked: true
  };

  it('should return value for text/date/url inputs', () => {
    const expected = target.value;

    const results = [
      fns.getEventValue({ ...target, type: 'text' }),
      fns.getEventValue({ ...target, type: 'date' }),
      fns.getEventValue({ ...target, type: 'url' })
    ];

    results.forEach((result) => expect(result).toEqual(expected));
  });

  it('should return checked for checkbox inputs', () => {
    const expected = target.checked;

    const result = fns.getEventValue({ ...target, type: 'checkbox' });

    expect(result).toEqual(expected);
  });

  it('should return value parsed to int if a number input', () => {
    const value = '1';
    const expected = 1;

    const result = fns.getEventValue({ ...target, value, type: 'number' });

    expect(result).toEqual(expected);
  });
});
