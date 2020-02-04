module.exports = {
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/camelcase': [
      'error',
      {
        genericType: 'always',
        ignoreDestructuring: false,
        properties: 'always',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    /**
     * Formatting should be done by Prettier.
     */
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowTypedFunctionExpressions: false },
    ],
    // Code should be formatted using Prettier.
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/generic-type-naming': ['error', '^[A-Z][a-zA-Z]+$'],
    /*
     * cspell:ignore oleg-koval
     *
     * TODO (oleg-koval) [2020-01-29] Enable and configure this rule after alignment.
     */
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-dynamic-delete': 'error',
    // Empty functions are often used as no operation.
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    // Code should be formatted using Prettier.
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      { ignore: [-1, 0, 1], ignoreNumericLiteralTypes: true },
    ],
    /*
     * Custom objects are often used in class-free applications.
     */
    '@typescript-eslint/no-throw-literal': 'off',
    /*
     * Type aliases are often needed when deriving and extending existing type
     * definitions.
     */
    '@typescript-eslint/no-type-alias': 'off',
    /**
     * `booleanValue === false` is preferred to `!booleanValue` to reduce
     * confusion with non-null assertions.
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    /*
     * `ignoreRhs` option forces the choice between false positives and false
     * negatives. Until this is fixed, enabling the option prevents false
     * positives.
     *
     * See https://github.com/typescript-eslint/typescript-eslint/pull/1163.
     */
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      { allowConstantLoopConditions: false, ignoreRhs: true },
    ],
    /**
     * This rule has been deprecated and replaced by
     * explicit-module-boundary-types as of @typescript-eslint/* v2.17.0.
     */
    '@typescript-eslint/no-untyped-public-signature': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        forceSuggestionFixer: false,
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    '@typescript-eslint/promise-function-async': ['error', { allowAny: true }],
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    // Code should be formatted using Prettier.
    '@typescript-eslint/quotes': 'off',
    // Conflicts with @typescript-eslint/promise-function-async.
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowBoolean: false, allowNullable: false, allowNumber: false },
    ],
    // Code should be formatted using Prettier.
    '@typescript-eslint/semi': 'off',
    // Code should be formatted using Prettier.
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
  },
};
