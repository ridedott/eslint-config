import typescriptEslintPlugin from 'typescript-eslint';

import { TEST_FILES } from '../constants';

export default [
  ...typescriptEslintPlugin.configs.all,
  {
    rules: {
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      // Does not make it possible to define recursive types.
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      // Conflicts with simple-import-sort/sort.
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowTypedFunctionExpressions: false },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: {
            memberTypes: [
              // Index signature
              'signature',
              'call-signature',

              // Fields
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              '#private-static-field',

              'public-decorated-field',
              'protected-decorated-field',
              'private-decorated-field',

              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',
              '#private-instance-field',

              'public-abstract-field',
              'protected-abstract-field',

              'public-field',
              'protected-field',
              'private-field',
              '#private-field',

              'static-field',
              'instance-field',
              'abstract-field',

              'decorated-field',

              'field',

              // Static initialization
              'static-initialization',

              // Constructors
              'public-constructor',
              'protected-constructor',
              'private-constructor',

              'constructor',

              // Accessors
              'public-static-accessor',
              'protected-static-accessor',
              'private-static-accessor',
              '#private-static-accessor',

              'public-decorated-accessor',
              'protected-decorated-accessor',
              'private-decorated-accessor',

              'public-instance-accessor',
              'protected-instance-accessor',
              'private-instance-accessor',
              '#private-instance-accessor',

              'public-abstract-accessor',
              'protected-abstract-accessor',

              'public-accessor',
              'protected-accessor',
              'private-accessor',
              '#private-accessor',

              'static-accessor',
              'instance-accessor',
              'abstract-accessor',

              'decorated-accessor',

              'accessor',

              // Getters
              'public-static-get',
              'protected-static-get',
              'private-static-get',
              '#private-static-get',

              'public-decorated-get',
              'protected-decorated-get',
              'private-decorated-get',

              'public-instance-get',
              'protected-instance-get',
              'private-instance-get',
              '#private-instance-get',

              'public-abstract-get',
              'protected-abstract-get',

              'public-get',
              'protected-get',
              'private-get',
              '#private-get',

              'static-get',
              'instance-get',
              'abstract-get',

              'decorated-get',

              'get',

              // Setters
              'public-static-set',
              'protected-static-set',
              'private-static-set',
              '#private-static-set',

              'public-decorated-set',
              'protected-decorated-set',
              'private-decorated-set',

              'public-instance-set',
              'protected-instance-set',
              'private-instance-set',
              '#private-instance-set',

              'public-abstract-set',
              'protected-abstract-set',

              'public-set',
              'protected-set',
              'private-set',
              '#private-set',

              'static-set',
              'instance-set',
              'abstract-set',

              'decorated-set',

              'set',

              // Methods
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              '#private-static-method',

              'public-decorated-method',
              'protected-decorated-method',
              'private-decorated-method',

              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',
              '#private-instance-method',

              'public-abstract-method',
              'protected-abstract-method',

              'public-method',
              'protected-method',
              'private-method',
              '#private-method',

              'static-method',
              'instance-method',
              'abstract-method',

              'decorated-method',

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
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
      '@typescript-eslint/no-extra-non-null-assertion': ['error'],
      '@typescript-eslint/no-inferrable-types': 'off',
      // This is already covered by functional/no-this-expressions and Typescript compiler.
      '@typescript-eslint/no-invalid-this': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignore: [-1, 0, 1],
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
        },
      ],
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
      '@typescript-eslint/no-unsafe-function-type': 'error',
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
       * Use TypeScript compiler options `noUnusedLocals` and `noUnusedParameters`
       * instead.
       */
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      // This is covered by unicorn/prefer-array-find
      '@typescript-eslint/prefer-find': 'off',
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
      '@typescript-eslint/promise-function-async': [
        'error',
        { allowAny: true },
      ],
      '@typescript-eslint/return-await': ['error', 'in-try-catch'],
      /**
       * Use TypeScript compiler options `noImplicitAny` and
       * `strictPropertyInitialization` instead.
       */
      '@typescript-eslint/typedef': 'off',
      // Conflicts with @typescript-eslint/promise-function-async.
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowBoolean: false, allowNullish: false, allowNumber: false },
      ],
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
  },
  {
    files: TEST_FILES,
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
    },
  },
];
