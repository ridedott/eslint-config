import eslintPluginFunctional from 'eslint-plugin-functional';

export default [
  {
    plugins: {
      functional: eslintPluginFunctional,
    },
    rules: {
      'functional/immutable-data': 'error',
      'functional/no-let': ['error', { allowInFunctions: true }],
      'functional/no-this-expressions': 'error',
    },
  },
];
