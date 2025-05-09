import jestPlugin from 'eslint-plugin-jest';

import { TEST_FILES } from '../constants.js';

export default [
  {
    files: TEST_FILES,
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs['flat/all'].rules,
      'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
      'jest/expect-expect': 'off',
      // Can be safely turned off thanks to vitest/prefer-expect-assertions.
      'jest/no-conditional-expect': 'off',
      'jest/no-hooks': 'off',
      'jest/prefer-expect-assertions': 'error',
      'jest/unbound-method': ['error', { ignoreStatic: true }],
      'jest/valid-title': ['error', { disallowedWords: ['should'] }],
    },
  },
];
