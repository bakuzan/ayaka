const compose = (...fns: ((...args: any) => any)[]) =>
  fns.reduce((f, g) => (...args: any) => f(g(...args)));

export default compose;
