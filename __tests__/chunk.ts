import * as fns from '../lib';

describe('chunk', () => {
  it('should return empty array for empty input', () => {
    const expected = [];

    const result = fns.chunk([], 10);

    expect(result).toEqual(expected);
  });

  it('should return chunked array', () => {
    const input = [1, 2, 3, 1, 2, 3, 1, 2];

    const result = fns.chunk(input, 3);

    expect(result.length).toEqual(3);
  });
});
