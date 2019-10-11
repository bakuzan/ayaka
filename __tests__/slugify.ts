import * as fns from '../lib';

describe('slugify', () => {
  it('should throw on bad input', () => {
    expect(() => fns.slugify(null)).toThrow();
  });

  it('should return unchanged text', () => {
    const expected = 'test';

    const result = fns.slugify('test');

    expect(result).toEqual(expected);
  });

  it('should return slugifyied text', () => {
    const expected = [
      'hello-world',
      'hello-world',
      'h3ll0-_-w0rld',
      'testing',
      'qwer7_z'
    ];

    const results = [
      fns.slugify('hello-world'),
      fns.slugify('hello ; world'),
      fns.slugify('h3ll0 _ W0rld'),
      fns.slugify('TeStIng'),
      fns.slugify('qweR7_;//[Z')
    ];

    results.forEach((result, i) => expect(result).toEqual(expected[i]));
  });
});
