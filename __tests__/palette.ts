import * as fns from '../lib';

describe('palette', () => {
  const colour = '#b22222';

  it('should return lightened colour', () => {
    const expected = '#d73030';

    const result = fns.lighten(10, colour);

    expect(result).toEqual(expected);
  });

  it('should return darkened colour', () => {
    const expected = '#871a1a';

    const result = fns.darken(10, colour);

    expect(result).toEqual(expected);
  });
});
