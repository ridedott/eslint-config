module.exports = {
  rules: {
    'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
    'jest/expect-expect': 'off',
    'jest/no-hooks': 'off',
    'jest/no-large-snapshots': 'off',
    // Can be safely used thanks to jest/prefer-expect-assertions.
    'jest/no-try-expect': 'off',
    // Can be safely used thanks to jest/prefer-expect-assertions.
    'jest/no-conditional-expect': 'off',
    'jest/require-top-level-describe': 'off',
    'jest/prefer-called-with': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-expect-assertions': 'error',
  },
};
