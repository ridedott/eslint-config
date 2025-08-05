import { jestESM } from './index.js';

export default [
  ...jestESM,
  {
    files: ['test/*.ts'],
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },
  {
    files: ['test/fixtures/**'],
    rules: {
      'jest/require-hook': 'off',
      'jest/require-top-level-describe': 'off',
      'jest/prefer-importing-jest-globals': 'off',
      'unicorn/filename-case': 'off',
    },
  },
];
