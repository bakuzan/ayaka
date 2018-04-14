import { isString, isArray } from 'utils/common';

export const constructPagingAndSorting = (
  { itemsPerPage, page },
  { sortKey, sortOrder },
  listType
) => {
  const pageSize = itemsPerPage[listType];
  const first = page * pageSize + pageSize;
  return `
    first: ${first},
    last: ${pageSize},
    sort: ${sortKey.toUpperCase()}_${sortOrder},
  `;
};

const appendCharacter = t => (a, i) => (a.length === i + 1 ? ` ${t}` : ', ');
const appendArrayBreak = appendCharacter(']');
const appendKeyBreak = appendCharacter('}');

// eslint-disable-next-line
const processArray = v =>
  v.length > 0
    ? v.reduce(
        (ac, cu, i) => `${ac} ${processType(cu)}${appendArrayBreak(v, i)}`,
        '['
      )
    : '[]';

const processType = v =>
  (v || v === '') && isString(v)
    ? `"${encodeURIComponent(v.replace(/"/g, '\\"'))}"`
    : isArray(v) ? processArray(v) : v;

export const constructRecordForPost = record => {
  return Object.keys(record)
    .filter(x => !NonPostableProperties.some(y => y === x))
    .reduce((acc, curr, i, arr) => {
      const value = processType(record[curr]);
      return `${acc} ${curr}: ${value}${appendKeyBreak(arr, i)}`;
    }, '{');
};

export const constructFilterString = filters => {
  const properties = Object.keys(filters).reduce((acc, curr, i, arr) => {
    const value = processType(filters[curr]);
    const nextArg = value || `${value}` === 'false' ? `${curr}: ${value}` : '';
    const separator = arr.length === i + 1 ? '' : ', ';
    return `${acc}${nextArg}${separator}`;
  }, '');
  return `filter: { ${properties} }`;
};

export const pagedDataWrapper = fields => `
  edges {
    node {
      ${fields}
    }
  }
  count
`;