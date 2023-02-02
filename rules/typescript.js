module.exports = {
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: false,
        types: {
          '{}': {
            fixWith: 'object',
            message: '`{}` actually means "any non-nullish value".',
          },
          Boolean: {
            fixWith: 'boolean',
            message: 'Use boolean instead.',
          },
          Function: {
            message: [
              'The `Function` type accepts any function-like value.',
              'It provides no type safety when calling the function, which can be a common source of bugs.',
              'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
              'If the function is expected to accept certain arguments, define the function shape explicitly.',
            ].join(' '),
          },
          Number: {
            fixWith: 'number',
            message: 'Use number instead.',
          },
          Object: {
            fixWith: 'object',
            message: 'Use object instead.',
          },
          String: {
            fixWith: 'string',
            message: 'Use string instead.',
          },
          Symbol: {
            fixWith: 'symbol',
            message: 'Use symbol instead.',
          },
        },
      },
    ],
    // Code should be formatted using Prettier.
    '@typescript-eslint/comma-dangle': 'off',
    // Does not make it possible to define recursive types.
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // Conflicts with simple-import-sort/sort.
    '@typescript-eslint/consistent-type-imports': 'off',
    // Code should be formatted using Prettier.
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowTypedFunctionExpressions: false },
    ],
    // Code should be formatted using Prettier.
    '@typescript-eslint/func-call-spacing': 'off',
    // Code should be formatted using Prettier.
    '@typescript-eslint/key-spacing': 'off',
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
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        selector: 'default',
        trailingUnderscore: 'forbid',
      },
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        selector: 'variable',
      },
      {
        custom: {
          match: true,
          regex: '[A-Z][a-zA-Z]+',
        },
        format: ['PascalCase'],
        selector: 'typeLike',
      },
      // Interfaces must not be prefixed with `I`.
      {
        custom: {
          match: false,
          regex: '^I[A-Z][a-z].+',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
      // Allow full uppercase names, e.g. CIA, FBI, R2D2.
      {
        filter: {
          match: true,
          regex: '[A-Z0-9]+',
        },
        format: null,
        selector: 'default',
      },
      // Allow unused parameters.
      {
        filter: {
          match: true,
          regex: '^_+$',
        },
        format: null,
        selector: 'parameter',
      },
      {
        filter: {
          match: true,
          regex: '^_+$',
        },
        format: null,
        selector: 'variable',
      },
      // Allow certain keywords that are used by engineering at Dott.
      {
        filter: {
          match: true,
          regex: '_version',
        },
        format: null,
        selector: 'default',
      },
      // Allow properties that require quotes (for example, containing dashes etc.)
      {
        selector: 'property',
        modifiers: ['requiresQuotes'],
        format: null,
      },
    ],
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
      {
        ignore: [-1, 0, 1],
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
      },
    ],
    // Custom objects are often used in class-free applications.
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
      { allowConstantLoopConditions: false },
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
    /**
     * Use TypeScript compiler options `noUnusedLocals` and `noUnusedParameters`
     * instead.
     */
    '@typescript-eslint/no-unused-vars': 'off',
    /**
     * Superseded by @typescript-eslint/no-unused-vars.
     */
    '@typescript-eslint/no-unused-vars-experimental': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
        ignoreTernaryTests: false,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    /**
     * Mutations are disallowed altogether, therefore it is not required to
     * mark function parameters as readonly.
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    // Conflicts with @typescript-eslint/typedef.
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/promise-function-async': ['error', { allowAny: true }],
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    /**
     * Use TypeScript compiler options `noImplicitAny` and
     * `strictPropertyInitialization` instead.
     */
    '@typescript-eslint/typedef': 'off',
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
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
      },
    ],
    // Extended by jest/unbound-method.
    '@typescript-eslint/unbound-method': 'off',
  },
};
