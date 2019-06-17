module.exports = {
  rules: {
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': 'off',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-use': [
      'error',
      {
        allow: ['eslint-disable', 'eslint-enable', 'eslint-disable-next-line'],
      },
    ],
  },
};
