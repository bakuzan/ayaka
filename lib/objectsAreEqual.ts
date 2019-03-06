import isArray from './isArray';
import isObject from './isObject';

export default function objectsAreEqual(o1: any, o2: any): boolean {
  const oneIsArray = isArray(o1);
  const twoIsArray = isArray(o2);

  if ((oneIsArray && !twoIsArray) || (!oneIsArray && twoIsArray)) {
    return false;
  }

  if (oneIsArray) {
    if (o1.length !== o2.length) {
      return false;
    }

    return o1.every((_: any, i: number) => objectsAreEqual(o1[i], o2[i]));
  }

  if (!isObject(o1) || !isObject(o2)) {
    return o1 === o2;
  }

  const keys = Object.keys(o1);
  if (keys.length !== Object.keys(o2).length) {
    return false;
  }

  return keys.every((k) => {
    const one = o1[k];
    const two = o2[k];

    return isArray(one)
      ? one.every((_: any, i: number) => objectsAreEqual(one[i], two[i]))
      : one === two;
  });
}
