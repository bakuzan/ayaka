interface ElementCoordinates {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export default function getElementCoordinates(
  elem: HTMLElement
): ElementCoordinates {
  const box = elem.getBoundingClientRect();
  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;
  const clientWidth = docEl.clientWidth;
  const clientHeight = docEl.clientHeight;

  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;

  return {
    top: Math.round(top),
    left: Math.round(left),
    right: Math.round(clientWidth - (left + box.width)),
    bottom: Math.round(clientHeight - (top + box.height))
  };
}
