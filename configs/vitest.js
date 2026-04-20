import vitestPlugin from '@vitest/eslint-plugin';

import { TEST_FILES } from '../constants.js';

export default [
  {
    files: TEST_FILES,
    plugins: {
      vitest: vitestPlugin,
    },
    rules: {
      ...vitestPlugin.configs.all.rules,
      'vitest/consistent-each-for': 'off',
      'vitest/consistent-test-filename': 'off',
      'vitest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
      // Redundant with vitest/prefer-expect-assertions.
      'vitest/expect-expect': 'off',
      // Redundant with vitest/prefer-expect-assertions.
      'vitest/no-conditional-expect': 'off',
      'vitest/no-disabled-tests': 'error',
      'vitest/no-focused-tests': 'error',
      // Conflicts with vitest/require-hook.
      'vitest/no-hooks': 'off',
      'vitest/no-identical-title': 'error',
      'vitest/max-expects': 'off',
      'vitest/no-large-snapshots': 'off',

      // padding-around-all is a meta-rule that duplicates the individual rules below; disable it to avoid double-reporting.
      'vitest/padding-around-all': 'off',
      'vitest/padding-around-after-all-blocks': 'error',
      'vitest/padding-around-after-each-blocks': 'error',
      'vitest/padding-around-before-all-blocks': 'error',
      'vitest/padding-around-before-each-blocks': 'error',
      'vitest/padding-around-expect-groups': 'error',
      'vitest/padding-around-describe-blocks': 'error',
      'vitest/padding-around-test-blocks': 'error',

      'vitest/prefer-describe-function-title': 'error',
      'vitest/prefer-each': 'error',
      'vitest/prefer-expect-assertions': 'error',
      'vitest/require-hook': 'error',
      'vitest/require-top-level-describe': 'error',
      'vitest/valid-describe-callback': 'error',
      'vitest/valid-expect': 'error',
      'vitest/valid-expect-in-promise': 'error',
      'vitest/valid-title': ['error', { disallowedWords: ['should'] }],
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  },
];
