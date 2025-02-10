module.exports = {
  rules: {
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': 'off',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    // This is covered by ESLint configuration: linterOptions.reportUnusedDisableDirectives
    'eslint-comments/no-unused-disable': 'off',
    // This is covered by ESLint configuration: linterOptions.reportUnusedDisableDirectives
    'eslint-comments/no-unused-enable': 'off',
    'eslint-comments/no-use': [
      'error',
      {
        allow: ['eslint-disable', 'eslint-enable', 'eslint-disable-next-line'],
      },
    ],
  },
};
