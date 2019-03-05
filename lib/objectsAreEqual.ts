import isArray from './isArray';
import isObject from './isObject';

export default function objectsAreEqual(o1: object, o2: object): boolean {
  if (!isObject(o1) || !isObject(o2)) {
    return o1 === o2;
  }

  return Object.keys(o1).every((k) => {
    const one = o1[k];
    const two = o2[k];
    return isArray(one)
      ? one
          .map((_, i: number) => objectsAreEqual(one[i], two[i]))
          .every((b: boolean) => b === true)
      : one === two;
  });
}
