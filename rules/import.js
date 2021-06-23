module.exports = {
  rules: {
    'import/no-default-export': 'error',
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'import/no-self-import': 'error',
  },
};
