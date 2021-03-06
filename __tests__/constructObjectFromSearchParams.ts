import * as fns from '../lib';

describe('constructObjectFromSearchParams', () => {
  const searchString = '?name=ayaka&number=1&isFemale=true';

  it('should build object from url search string', () => {
    const expected = { name: 'ayaka', number: 1, isFemale: true };

    const results = [
      fns.constructObjectFromSearchParams(searchString),
      fns.constructObjectFromSearchParams('name=ayaka&number=1&isFemale=true'),
      fns.constructObjectFromSearchParams(
        'http://domin.test?name=ayaka&number=1&isFemale=true'
      )
    ];

    results.forEach((result) => expect(result).toEqual(expected));
  });

  it('should convert number params to numbers', () => {
    const expected = 1;

    const result = fns.constructObjectFromSearchParams(searchString);

    expect(typeof result['number']).toEqual(typeof expected);
  });

  it('should convert bool params to bools', () => {
    const expected = true;

    const result = fns.constructObjectFromSearchParams(searchString);

    expect(typeof result['isFemale']).toEqual(typeof expected);
  });

  it('should return an object if no search string', () => {
    const expected = {};

    const result = fns.constructObjectFromSearchParams();

    expect(typeof result).toEqual(typeof expected);
  });

  it('should not return param if undefined', () => {
    const expected = {};

    const result = fns.constructObjectFromSearchParams('?team');

    expect(typeof result).toEqual(typeof expected);
    expect(result.hasOwnProperty('team')).toBe(false);
  });
});
