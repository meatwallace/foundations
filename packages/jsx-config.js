module.exports = {
  extends: '@meatwallace/eslint-config-typescript',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jsx-a11y', 'react'],
  rules: {
    // -- eslint-plugin-jsx-a11y
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    // -- eslint-plugin-react
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-depth': [2, { max: 3 }],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-no-bind': 1,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': [2, { noStrings: true }],
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/jsx-pascal-case': [2, { allowAllCaps: true }],
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-sort-default-props': 2,
    'react/jsx-sort-props': 2,
    'react/jsx-tag-spacing': [
      2,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        // eslint-disable-next-line unicorn/prevent-abbreviations
        prop: 'parens-new-line',
      },
    ],
  },
};
