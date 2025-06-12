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
      'vitest/consistent-test-filename': 'off',
      'vitest/consistent-test-it': [
        'error',
        { fn: 'it', withinDescribe: 'it' },
      ],
      'vitest/expect-expect': 'off',
      // Can be safely turned off thanks to vitest/prefer-expect-assertions.
      'vitest/no-conditional-expect': 'off',
      'vitest/no-hooks': 'off',
      'vitest/prefer-expect-assertions': 'error',
      'vitest/valid-title': ['error', { disallowedWords: ['should'] }],
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  },
];
