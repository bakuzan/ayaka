import compose from './compose';
import parseIfInt from './parseIfInt';
import castStringToBool from './castStringToBool';

const parseSearchParamValue = compose(
  (str) => castStringToBool(str, false),
  parseIfInt,
  decodeURIComponent
);

interface KeyValueObject {
  [key: string]: any;
}

const constructObjectFromSearchParams = (searchParam = ''): KeyValueObject =>
  searchParam
    .slice(1)
    .split('&')
    .reduce((p, c) => {
      const [key, raw] = c.split('=');
      if (raw === undefined) {
        return p;
      }

      const value = parseSearchParamValue(raw);
      return { ...p, [key]: value };
    }, {});

export default constructObjectFromSearchParams;
