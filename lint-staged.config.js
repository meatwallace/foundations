module.exports = {
  '*.{json,md,yml}': ['yarn format', 'git add'],
  '*.js': [
    'yarn format',
    'yarn fix',
    'yarn test --bail --findRelatedTests',
    'git add',
  ],
};
