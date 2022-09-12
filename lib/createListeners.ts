const createListeners =
  (t: string, f: EventListenerOrEventListenerObject) =>
  (el: HTMLElement | Document = document) => ({
    listen: () => el.addEventListener(t, f),
    remove: () => el.removeEventListener(t, f)
  });

export default createListeners;
