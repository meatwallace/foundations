module.exports = {
  '*.{json,md,yml}': ['prettier-eslint --write', 'git add'],
  '*.js': [
    'prettier-eslint --write',
    'jest --bail --findRelatedTests',
    'git add',
  ],
};
