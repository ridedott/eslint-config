module.exports = {
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowTypedFunctionExpressions: false },
    ],
    // Code should be formatted using Prettier.
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/generic-type-naming': ['error', '^[A-Z][a-zA-Z]+$'],
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      { ignore: [0, 1], ignoreNumericLiteralTypes: true },
    ],
    /*
     * Type aliases are often needed when deriving and extending existing type
     * definitions.
     */
    '@typescript-eslint/no-type-alias': 'off',
    /*
     * `ignoreRhs` option forces the choice between false positives and false
     * negatives. Until this is fixed, enabling the option prevents false
     * positives.
     *
     * See https://github.com/typescript-eslint/typescript-eslint/pull/1163.
     */
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      { ignoreRhs: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/promise-function-async': ['error', { allowAny: true }],
    // Code should be formatted using Prettier.
    '@typescript-eslint/quotes': 'off',
    // Conflicts with @typescript-eslint/promise-function-async.
    '@typescript-eslint/require-await': 'off',
    // Code should be formatted using Prettier.
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
  },
};
