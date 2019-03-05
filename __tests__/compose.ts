import * as fns from '../lib';

const addLetter = (l1: string) => (l2: string) => l2 + l1;
const addY = addLetter('y');
const addA = addLetter('a');
const addK = addLetter('k');

describe('compose', () => {
  it('should apply functions in order (right/last arg -> left/first arg)', () => {
    const expected = 'ayaka';

    const fn = fns.compose(
      addA,
      addK,
      addA,
      addY
    );
    const result = fn('a');

    expect(result).toEqual(expected);
  });
});
