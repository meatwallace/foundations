module.exports = {
  '**/*.{js,json,md,yml}': ['prettier-eslint --write', 'git add'],
  '**/*.js': ['jest --bail --findRelatedTests', 'flow focus-check', 'git add'],
};
