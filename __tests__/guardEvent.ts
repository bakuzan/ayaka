import { guardEvent } from '../lib';

function createMouseEvent(props: any): MouseEvent {
  const event = { ...props };

  return <any>event;
}

describe('guardEvent', () => {
  it('should not call prevent default when a control key is used', () => {
    const preventDefaultMock = jest.fn();

    const keys = ['metaKey', 'altKey', 'ctrlKey', 'shiftKey'];

    keys.forEach((key) => {
      const event = createMouseEvent({
        type: 'test',
        [key]: true,
        preventDefault: preventDefaultMock
      });

      const result = guardEvent(event);

      expect(result).toBe(undefined);
      expect(preventDefaultMock).not.toHaveBeenCalled();

      preventDefaultMock.mockReset();
    });
  });

  it('should not call prevent default if it was already called', () => {
    const preventDefaultMock = jest.fn();

    const event = createMouseEvent({
      type: 'test',
      defaultPrevented: true,
      preventDefault: preventDefaultMock
    });

    const result = guardEvent(event);

    expect(result).toBe(undefined);
    expect(preventDefaultMock).not.toHaveBeenCalled();
  });

  it('should not call prevent default if right click', () => {
    const preventDefaultMock = jest.fn();

    const event = createMouseEvent({
      type: 'test',
      button: 'something',
      preventDefault: preventDefaultMock
    });

    let result = guardEvent(event);

    expect(result).toBe(undefined);
    expect(preventDefaultMock).not.toHaveBeenCalled();
  });

  it('should not call prevent default target is "_blank"', () => {
    const preventDefaultMock = jest.fn();

    const link = document.createElement('a');
    link.target = '_blank';

    const event = createMouseEvent({
      type: 'test',
      currentTarget: link,
      preventDefault: preventDefaultMock
    });

    const result = guardEvent(event);

    expect(result).toBe(undefined);
    expect(preventDefaultMock).not.toHaveBeenCalled();
  });

  it('should call prevent default', () => {
    const preventDefaultMock = jest.fn();

    const link = document.createElement('a');
    link.target = '';

    let event = createMouseEvent({
      type: 'test',
      currentTarget: link,
      preventDefault: preventDefaultMock
    });

    let result = guardEvent(event);

    expect(result).toBe(true);
    expect(preventDefaultMock).toHaveBeenCalled();

    preventDefaultMock.mockReset();

    event = createMouseEvent({
      type: 'test',
      preventDefault: preventDefaultMock
    });

    result = guardEvent(event);

    expect(result).toBe(true);
    expect(preventDefaultMock).toHaveBeenCalled();
  });
});
