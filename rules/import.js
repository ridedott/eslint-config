module.exports = {
  rules: {
    // This rule conflicts with features provided by Typescript.
    'import/namespace': 'off',
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'import/no-default-export': 'error',
    'import/no-self-import': 'error',
  },
};
