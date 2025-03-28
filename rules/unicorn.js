export default {
  rules: {
    'unicorn/better-regex': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/custom-error-definition': 'error',
    // Code should be formatted using Prettier.
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/expiring-todo-comments': [
      'error',
      { allowWarningComments: false, ignoreDatesOnPullRequests: false },
    ],
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
    // No good use cases yet.
    'unicorn/import-style': 'off',
    // Covered by eslint-comments/no-unlimited-disable.
    'unicorn/no-abusive-eslint-disable': 'off',
    // Unnecessary with TypeScript.
    'unicorn/no-array-callback-reference': 'off',
    // Covered by functional/no-this-expressions.
    'unicorn/no-array-method-this-argument': 'off',
    'unicorn/no-array-reduce': 'off',
    // Allows awaiting a promise and immediately accessing a property.
    'unicorn/no-await-expression-member': 'off',
    // Ternary operators help write immutable code.
    'unicorn/no-nested-ternary': 'off',
    // This is covered by @typescript-eslint/no-deprecated
    'unicorn/no-new-buffer': 'off',
    'unicorn/no-null': 'off',
    // Unnecessary with TypeScript.
    'unicorn/no-object-as-default-parameter': 'off',
    // Covered by consistent-this.
    'unicorn/no-this-assignment': 'off',
    // Covered by @typescript-eslint/return-await
    'unicorn/no-unnecessary-await': 'off',
    'unicorn/no-unreadable-array-destructuring': 'off',
    // Conflicts with @typescript-eslint/switch-exhaustiveness-check
    'unicorn/no-useless-switch-case': 'off',
    'unicorn/no-useless-undefined': 'off',
    // Code should be formatted using Prettier.
    'unicorn/number-literal-case': 'off',
    'unicorn/prefer-event-target': 'off',
    // This is covered by @typescript-eslint/no-deprecated
    'unicorn/prefer-keyboard-event-key': 'off',
    // TypeScript `noUnusedLocals` covers this.
    'unicorn/prefer-optional-catch-binding': 'off',
    // Does not work with strict type checking.
    'unicorn/prefer-regexp-test': 'off',
    // Prefer `Array.from` for performance benefits.
    'unicorn/prefer-spread': 'off',
    // This is covered by @typescript-eslint/no-deprecated
    'unicorn/prefer-string-trim-start-end': 'off',
    // Type checks are performed by TypeScript compiler.
    'unicorn/prefer-type-error': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkDefaultAndNamespaceImports: true,
        checkFilenames: true,
        checkProperties: true,
        checkShorthandImports: 'internal',
        checkVariables: true,
        replacements: {
          //  Allow `i18n`.
          i: false,
        },
      },
    ],
    'unicorn/switch-case-braces': ['error', 'avoid'],
  },
};
