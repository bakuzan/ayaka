import * as fns from '../lib';

const isBase64 = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/;

describe('convertToBase64', () => {
  it('should convert input to base64 string', () => {
    fns.convertToBase64(new Blob(), () => {
      const reader = this;
      const { result } = reader;

      expect(result.test(isBase64)).toBeTruthy();
    });
  });
});
