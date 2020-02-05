import * as fns from '../lib';

describe('groupBy', () => {
  it('should return grouped items', () => {
    const items = [1, 2, 2, 3, 1, 2, 3, 4, 2, 3, 1];
    const groups = new Map<number, number[]>([
      [1, [1, 1, 1]],
      [2, [2, 2, 2, 2]],
      [3, [3, 3, 3]],
      [4, [4]]
    ]);

    const result = fns.groupBy(items);

    expect(result).toEqual(groups);
  });

  it('should return grouped items', () => {
    const items = [
      { key: 'first' },
      { key: 'second' },
      { key: 'second' },
      { key: 'first' },
      { key: 'third' }
    ];

    const groups = new Map<string, { key: string }[]>([
      ['first', [{ key: 'first' }, { key: 'first' }]],
      ['second', [{ key: 'second' }, { key: 'second' }]],
      ['third', [{ key: 'third' }]]
    ]);

    const result = fns.groupBy(items, (x) => x.key);

    expect(result).toEqual(groups);
  });
});
