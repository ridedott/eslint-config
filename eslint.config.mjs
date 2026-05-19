import { vitestESM } from './index.js';

export default [
  ...vitestESM,
  {
    files: ['test/*.ts'],
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },
  {
    files: ['test/fixtures/**'],
    rules: {
      'vitest/require-hook': 'off',
      'vitest/require-top-level-describe': 'off',
      'vitest/prefer-importing-vitest-globals': 'off',
      'unicorn/filename-case': 'off',
    },
  },
];
