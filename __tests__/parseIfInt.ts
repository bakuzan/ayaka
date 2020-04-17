import * as fns from '../lib';

describe('parseIfInt', () => {
  it('should return number', () => {
    const expected = 1;

    const result = fns.parseIfInt('1');

    expect(result).toEqual(expected);
  });

  it('should return number', () => {
    const expected = 0;

    const result = fns.parseIfInt('0');

    expect(result).toEqual(expected);
  });

  it('should return input', () => {
    const expected = 'true';

    const result = fns.parseIfInt('true');

    expect(result).toEqual(expected);
  });

  it('should return input', () => {
    const expected = 'hello';

    const result = fns.parseIfInt('hello');

    expect(result).toEqual(expected);
  });

  it('should return input if has non-numbers', () => {
    const expected = 'h3770';

    const result = fns.parseIfInt('h3770');

    expect(result).toEqual(expected);
  });

  it('should return input if has non-numbers', () => {
    const expected = '99-3546-345335';

    const result = fns.parseIfInt('99-3546-345335');

    expect(result).toEqual(expected);
  });

  it('should return input if has non-numbers', () => {
    const expected = '007jamesbond';

    const result = fns.parseIfInt('007jamesbond');

    expect(result).toEqual(expected);
  });

  it('should return input if empty string', () => {
    const expected = '';

    const result = fns.parseIfInt('');

    expect(result).toEqual(expected);
  });
});
