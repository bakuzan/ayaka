import compose from './compose';
import fromCamelCase from './fromCamelCase';

export const capitalise = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const capitaliseEachWord = (str: string): string =>
  str
    .split(' ')
    .map(capitalise)
    .join(' ');

export const separateAndCapitalise = compose(capitalise, fromCamelCase);

export const separateAndCapitaliseAll = compose(
  capitaliseEachWord,
  fromCamelCase
);
