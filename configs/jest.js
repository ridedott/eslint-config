import jestPlugin from 'eslint-plugin-jest';

export default [
  {
    files: [
      'test/**',
      '__mocks__/**',
      '**/*.spec.{ts,tsx}',
      '**/*.test.{ts,tsx}',
    ],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs['flat/all'].rules,
      'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
      'jest/expect-expect': 'off',
      // Can be safely turned off thanks to vitest/prefer-expect-assertions.
      'jest/no-conditional-expect': 'off',
      'jest/prefer-expect-assertions': 'error',
      'jest/unbound-method': ['error', { ignoreStatic: true }],
      'jest/valid-title': ['error', { disallowedWords: ['should'] }],
    },
  },
];
