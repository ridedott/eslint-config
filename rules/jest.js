module.exports = {
  rules: {
    'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
    'jest/expect-expect': 'off',
    'jest/no-hooks': 'off',
    'jest/no-large-snapshots': 'off',
    'jest/no-try-expect': 'off',
    'jest/prefer-called-with': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-to-have-length': 'error',
  },
};
