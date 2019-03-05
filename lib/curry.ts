export default function curry(
  uncurried: (...args: any[]) => any,
  ...args: any[]
): (...args: any[]) => any {
  const parameters = Array.prototype.slice.call(arguments, 1);
  return function() {
    return uncurried.apply(
      this,
      parameters.concat(Array.prototype.slice.call(arguments, 0))
    );
  };
}
