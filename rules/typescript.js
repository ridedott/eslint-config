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
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: [
            'signature',
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',
            'public-abstract-field',
            'protected-abstract-field',
            'private-abstract-field',
            'public-field',
            'protected-field',
            'private-field',
            'static-field',
            'instance-field',
            'abstract-field',
            'field',
            'public-constructor',
            'protected-constructor',
            'private-constructor',
            'constructor',
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            'public-abstract-method',
            'protected-abstract-method',
            'private-abstract-method',
            'public-method',
            'protected-method',
            'private-method',
            'static-method',
            'instance-method',
            'abstract-method',
            'method',
          ],
          order: 'alphabetically',
        },
      },
    ],
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
    '@typescript-eslint/no-unsafe-assignment': 'off',
    /**
     * `any` type can only come from libraries. Until correct types are added
     * to those libraries, it is too much of an overhead to define all types
     * manually.
     */
    '@typescript-eslint/no-unsafe-call': 'off',
    /**
     * `any` type can only come from libraries. Until correct types are added
     * to those libraries, it is too much of an overhead to define all types
     * manually.
     */
    '@typescript-eslint/no-unsafe-member-access': 'off',
    /**
     * `any` type can only come from libraries. Until correct types are added
     * to those libraries, it is too much of an overhead to define all types
     * manually.
     */
    '@typescript-eslint/no-unsafe-return': 'off',
    /**
     * This rule has been deprecated and replaced by
     * explicit-module-boundary-types as of @typescript-eslint/* v2.17.0.
     */
    '@typescript-eslint/no-untyped-public-signature': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        forceSuggestionFixer: false,
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    /**
     * Mutations are disallowed altogether, therefore it is not required to
     * mark function parameters as readonly.
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    // Conflicts with @typescript-eslint/typedef
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
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
