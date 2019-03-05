import compose from './compose';
import parseIfInt from './parseIfInt';
import castStringToBool from './castStringToBool';

const parseSearchParamValue = compose(
  (str) => castStringToBool(str, false),
  parseIfInt,
  decodeURIComponent
);

const constructObjectFromSearchParams = (searchParam = ''): object =>
  searchParam
    .slice(1)
    .split('&')
    .reduce((p, c) => {
      const [key, raw] = c.split('=');
      const value = parseSearchParamValue(raw);
      return { ...p, [key]: value };
    }, {});

export default constructObjectFromSearchParams;
