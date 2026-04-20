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
      'vitest/consistent-test-it': [
        'error',
        { fn: 'it', withinDescribe: 'it' },
      ],
      'vitest/expect-expect': 'off',
      // Can be safely turned off thanks to vitest/prefer-expect-assertions.
      'vitest/no-conditional-expect': 'off',
      'vitest/no-disabled-tests': 'error',
      'vitest/no-focused-tests': 'error',
      'vitest/no-hooks': 'off',
      'vitest/no-identical-title': 'error',
      'vitest/hoisted-apis-on-top': 'off',
      // Needs an explicit limit to be useful.
      'vitest/max-expects': 'off',
      // Needs an explicit limit to be useful.
      'vitest/no-large-snapshots': 'off',
      // Conflicts with padding-line-between-statements.
      'vitest/padding-around-after-all-blocks': 'off',
      'vitest/padding-around-after-each-blocks': 'off',
      'vitest/padding-around-all': 'off',
      'vitest/padding-around-before-all-blocks': 'off',
      'vitest/padding-around-before-each-blocks': 'off',
      'vitest/padding-around-describe-blocks': 'off',
      'vitest/padding-around-expect-groups': 'off',
      'vitest/padding-around-test-blocks': 'off',
      'vitest/prefer-describe-function-title': 'off',
      'vitest/prefer-each': 'off',
      'vitest/prefer-expect-assertions': 'error',
      // Too restrictive for simple flat test files.
      'vitest/require-hook': 'off',
      // Too restrictive for simple flat test files.
      'vitest/require-top-level-describe': 'off',
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
