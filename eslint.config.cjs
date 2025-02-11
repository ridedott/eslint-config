const jestPlugin = require('eslint-plugin-jest');

const shareableConfig = require('./index');

module.exports = [
  ...shareableConfig,
  {
    files: ['test/*.ts'],
    ...jestPlugin.configs.all,
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      'unicorn/no-unsafe-regex': 'off',
    },
  },
  {
    files: ['test/fixtures/**'],
    rules: {
      'jest/require-hook': 'off',
      'unicorn/filename-case': 'off',
    },
  },
];
