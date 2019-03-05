import * as fns from '../lib';

describe('createListeners', () => {
  const BUTTON_NAME = 'TESTBUTTON';
  const button = document.createElement('button');
  button.name = BUTTON_NAME;

  it('should return add/remove functions', () => {
    const fn = fns.createListeners('click', () => null);
    const listeners = fn();

    const result = Object.keys(listeners);

    expect(result).toEqual(['listen', 'remove']);
  });

  it('should attach listeners and return add/remove functions', () => {
    const clickHandler = jest.fn(function clickHandler(event: any) {
      expect(event.target.name).toEqual(BUTTON_NAME);
    });
    const fn = fns.createListeners('click', clickHandler);

    const listeners = fn(button);
    button.click();
    listeners.listen();
    button.click();
    listeners.remove();
    button.click();

    expect(clickHandler).toBeCalledTimes(1);
  });
});
