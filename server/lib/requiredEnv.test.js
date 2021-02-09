const { requiredEnv } = require('./requiredEnv');

const OLD_ENV = process.env;

describe('requiredEnv', () => {
  afterAll(() => {
    process.env = OLD_ENV; // restore old env
  });

  it('returns an error with missing process.env variables', () => {
    requiredEnv(["FOO", "BAR"], (error) => {
      const msg = "Required ENV variables are not set: [FOO, BAR]";
      expect(error).toBe(msg)
    });
  });

  it('returns no error if process.env variables are set', () => {
    process.env.FOO = "test";
    process.env.BAR = "password";
    requiredEnv(["FOO", "BAR"], (error) => {
      expect(error).toBeUndefined();
    })
  });
});
