import * as fns from '../lib';

describe('getElementCoordinates', () => {
  let element = null;

  beforeAll(() => {
    element = window.document.createElement('div');
    window.document.body.appendChild(element);
  });

  it('should return object of element coordinates', () => {
    const expected = { top: 0, bottom: 0, left: 0, right: 0 };

    const result = fns.getElementCoordinates(element);

    expect(result).toEqual(expected);
  });
});
