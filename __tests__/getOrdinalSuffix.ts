import * as fns from '../lib';

describe('getOrdinalSuffix', () => {
  it('should return st suffix', () => {
    const expected = '1st';

    const result = fns.getOrdinalSuffix(1);

    expect(result).toEqual(expected);
  });

  it('should return nd suffix', () => {
    const expected = '2nd';

    const result = fns.getOrdinalSuffix(2);

    expect(result).toEqual(expected);
  });

  it('should return rd suffix', () => {
    const expected = '3rd';

    const result = fns.getOrdinalSuffix(3);

    expect(result).toEqual(expected);
  });

  it('should return th suffixes', () => {
    const inputs = [4, 9, 11, 12, 113];

    const results = inputs.map((i) => fns.getOrdinalSuffix(i));

    results.forEach((result, i) => expect(result).toEqual(`${inputs[i]}th`));
  });
});
