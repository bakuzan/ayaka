import * as fns from '../lib';

describe('capitalise', () => {
  it('should capitalise a string', () => {
    const expected = 'Ayaka';

    const result = fns.capitalise('ayaka');

    expect(result).toEqual(expected);
  });

  it('should ignore other capitals', () => {
    const expected = 'AyaKa';

    const result = fns.capitalise('ayaKa');

    expect(result).toEqual(expected);
  });
});

describe('capitaliseEachWord', () => {
  it('should capitalise each word', () => {
    const expected = 'Ayaka Is A Function Library';

    const result = fns.capitaliseEachWord('ayaka is a function library');

    expect(result).toEqual(expected);
  });

  it('should ignore other capitals', () => {
    const expected = 'AyaKa Is A FuNctIon Library';

    const result = fns.capitaliseEachWord('ayaKa is a fuNctIon library');

    expect(result).toEqual(expected);
  });
});

describe('separateAndCapitalise', () => {
  it('should split camelCase and capitalise the first word', () => {
    const expected = 'Kagari ayaka';

    const result = fns.separateAndCapitalise('kagariAyaka');

    expect(result).toEqual(expected);
  });

  it('should capitalise the string with no other capitals', () => {
    const expected = 'Kagariayaka';

    const result = fns.separateAndCapitalise('kagariayaka');

    expect(result).toEqual(expected);
  });
});

describe('separateAndCapitaliseAll', () => {
  it('should split camelCase and capitalise all words first word', () => {
    const expected = 'Kagari Ayaka';

    const result = fns.separateAndCapitaliseAll('kagariAyaka');

    expect(result).toEqual(expected);
  });

  it('should capitalise the string with no other capitals', () => {
    const expected = 'Kagariayaka';

    const result = fns.separateAndCapitaliseAll('kagariayaka');

    expect(result).toEqual(expected);
  });
});
