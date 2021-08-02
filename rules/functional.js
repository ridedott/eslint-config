module.exports = {
  rules: {
    'functional/immutable-data': 'error',
    'functional/no-let': ['error', { allowLocalMutation: true }],
    'functional/no-this-expression': 'error',
  },
};
