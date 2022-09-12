/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-unused-vars */
export default function curry(
  uncurried: (...fArgs: any[]) => any,
  ...passArgs: any[]
): (...args: any[]) => any {
  const parameters = Array.prototype.slice.call(arguments, 1);
  return function () {
    return uncurried.apply(
      this,
      parameters.concat(Array.prototype.slice.call(arguments, 0))
    );
  };
}
