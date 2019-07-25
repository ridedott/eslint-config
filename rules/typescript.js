module.exports = {
  rules: {
    '@typescript-eslint/array-type': ['error', 'array-simple'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // Code should be formatted using Prettier.
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/generic-type-naming': ['error', '^[A-Z][a-zA-Z]+$'],
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
    '@typescript-eslint/no-magic-numbers': [
      'error',
      { ignore: [0, 1], ignoreNumericLiteralTypes: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/promise-function-async': ['error', { allowAny: true }],
    // Conflicts with @typescript-eslint/promise-function-async.
    '@typescript-eslint/require-await': 'off',
    // Code should be formatted using Prettier.
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
  },
};
