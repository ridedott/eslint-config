import shareableConfig from './index.js';

export default [
  ...shareableConfig,
  {
    files: ['test/*.ts'],
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
