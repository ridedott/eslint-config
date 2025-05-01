import vitestPlugin from 'eslint-plugin-vitest';

export default [
  {
    files: ['test/**', '__mocks__/**', '**/*.spec.ts', '**/*.test.ts'],
    plugins: {
      vitest: vitestPlugin,
    },
    rules: {
      ...vitestPlugin.configs.all.rules,
      'vitest/consistent-test-it': [
        'error',
        { fn: 'it', withinDescribe: 'it' },
      ],
      'vitest/expect-expect': 'off',
      // Can be safely turned off thanks to vitest/prefer-expect-assertions.
      'vitest/no-conditional-expect': 'off',
      'vitest/prefer-expect-assertions': 'error',
      'vitest/valid-title': ['error', { disallowedWords: ['should'] }],
    },
  },
];
