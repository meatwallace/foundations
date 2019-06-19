// @flow
import path from 'path';
import { readConfig } from 'jest-config';

test.skip('it is a valid and up to date jest configuration', () => {
  // if readConfig returns without throwing, we know our config is valid
  const result = readConfig(
    { config: path.join(__dirname, 'index.js') },
    __dirname,
  );

  expect(result.hasDeprecationWarnings).toBe(false);
});
