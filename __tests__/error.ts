import AyakaError from '../lib/utils/error';

describe('AyakaError', () => {
  it('should create error', () => {
    const name = 'Error';
    const message = 'An error occurred.';

    const result = new AyakaError(0);

    expect(result instanceof AyakaError).toBeTruthy();
    expect(result instanceof Error).toBeTruthy();
    expect(result.name).toEqual(name);
    expect(result.message).toEqual(message);
  });

  it('should format additional args', () => {
    const name = 'Error';
    const message = 'An error occurred.';

    const result = new AyakaError(0, 'Some test value');

    expect(result.name).toEqual(name);
    expect(result.message).toEqual(message);
  });

  it('should return generic for production', () => {
    const originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    const name = 'Error';
    const message = 'An error occurred. Code: 0';

    const result = new AyakaError(0, 'Some test value');

    expect(result.name).toEqual(name);
    expect(result.message).toEqual(message);

    process.env.NODE_ENV = originalNodeEnv;
  });
});
