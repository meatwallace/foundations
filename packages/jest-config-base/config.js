module.exports = {
  coverageDirectory: 'coverage',
  errorOnDeprecated: true,
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/.undodir/', '/.yarn/', '/node_modules/'],
  verbose: true,
};
