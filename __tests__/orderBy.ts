import * as fns from '../lib';

const items = [
  { name: 'zebra' },
  { name: 'elephant' },
  { name: 'kangaroo' },
  { name: 'alpaca' },
  { name: 'monkey' }
];

const ascendingItems = [
  { name: 'alpaca' },
  { name: 'elephant' },
  { name: 'kangaroo' },
  { name: 'monkey' },
  { name: 'zebra' }
];

describe('orderBy', () => {
  it('should return sorted objects', () => {
    const result = fns.orderBy(items, ['name']);

    expect(result).toEqual(ascendingItems);
  });

  it('should return sorted objects - desc', () => {
    const items = [
      { name: 'zebra' },
      { name: 'elephant' },
      { name: 'kangaroo' },
      { name: 'alpaca' },
      { name: 'monkey' }
    ];

    const result = fns.orderBy(items, ['name'], ['desc']);

    expect(result).toEqual(ascendingItems.reverse());
  });

  it('should return sorted objects on multiple props/orders', () => {
    const items = [
      { name: 'zebra', weight: 100 },
      { name: 'elephant', weight: 1000 },
      { name: 'kangaroo', weight: 40 },
      { name: 'alpaca', weight: 110 },
      { name: 'monkey', weight: 32 },
      { name: 'zebra', weight: 80 },
      { name: 'elephant', weight: 1000 },
      { name: 'kangaroo', weight: 35 },
      { name: 'alpaca', weight: 125 },
      { name: 'monkey', weight: 40 }
    ];

    const result = fns.orderBy(items, ['name', 'weight'], ['asc', 'desc']);

    expect(result).toEqual([
      { name: 'alpaca', weight: 125 },
      { name: 'alpaca', weight: 110 },
      { name: 'elephant', weight: 1000 },
      { name: 'elephant', weight: 1000 },
      { name: 'kangaroo', weight: 40 },
      { name: 'kangaroo', weight: 35 },
      { name: 'monkey', weight: 40 },
      { name: 'monkey', weight: 32 },
      { name: 'zebra', weight: 100 },
      { name: 'zebra', weight: 80 }
    ]);
  });
});
