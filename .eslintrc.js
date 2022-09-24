module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'import/order': 0,
    'import/no-dynamic-require': 0,
    'arrow-body-style': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'react/no-danger': 0,
    'react/forbid-prop-types': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
};
