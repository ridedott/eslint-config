module.exports = {
  rules: {
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'import/no-default-export': 'error',
    'import/no-self-import': 'error',
  },
};
