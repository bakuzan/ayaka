import * as fns from '../lib';

describe('castStringToBool', () => {
  it('should convert a stringified bool to bool', () => {
    const expected = [true, false];

    const results = [
      fns.castStringToBool('true'),
      fns.castStringToBool('false')
    ];

    results.forEach((result, i) => expect(result).toEqual(expected[i]));
  });

  it('should ignore non bools when not forced', () => {
    const expected = 'test';

    const result = fns.castStringToBool(expected, false);

    expect(result).toEqual(expected);
  });

  it('should cast non bools to bool when forced', () => {
    const expected = true;
    const results = [
      fns.castStringToBool('test'),
      fns.castStringToBool('test', true)
    ];

    results.forEach((result) => expect(result).toEqual(expected));
  });
});
