const path = require('path');

const { rootPath } = require('../config/paths');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    project: path.resolve(rootPath, 'tsconfig.json'),
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_' }],
    '@typescript-eslint/indent': 'off',

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',

    'react/jsx-one-expression-per-line': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/accessible-emoji': 'warn',

    'no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_' }],
    'no-console': 'error',
  },
};
