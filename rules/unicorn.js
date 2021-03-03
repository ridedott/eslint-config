module.exports = {
  rules: {
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'error',
    // Code should be formatted using Prettier.
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': [
      'error',
      { allowWarningComments: false },
    ],
    'unicorn/explicit-length-check': ['error', { 'non-zero': 'greater-than' }],
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
    'unicorn/import-index': 'error',
    // No good use cases yet.
    'unicorn/import-style': 'off',
    'unicorn/new-for-builtins': 'error',
    // Covered by eslint-comments/no-unlimited-disable.
    'unicorn/no-abusive-eslint-disable': 'off',
    // Unnecessary with TypeScript.
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-lonely-if': 'error',
    // Ternary operators help write immutable code.
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-null': 'off',
    // Unnecessary with TypeScript.
    'unicorn/no-object-as-default-parameter': 'off',
    'unicorn/no-process-exit': 'off',
    // Do not use classes in the first place.
    'unicorn/no-static-only-class': 'off',
    // Covered by consistent-this.
    'unicorn/no-this-assignment': 'off',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-zero-fractions': 'error',
    // Code should be formatted using Prettier.
    'unicorn/number-literal-case': 'off',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    // Manual DOM manipulation is discouraged.
    'unicorn/prefer-dom-node-append': 'off',
    'unicorn/prefer-dom-node-dataset': 'off',
    // Manual DOM manipulation is discouraged.
    'unicorn/prefer-dom-node-remove': 'off',
    // Manual DOM manipulation is discouraged.
    'unicorn/prefer-dom-node-text-content': 'off',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-number-properties': 'error',
    // TypeScript `noUnusedLocals` covers this.
    'unicorn/prefer-optional-catch-binding': 'off',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    // Does not work with strict type checking.
    'unicorn/prefer-regexp-test': 'off',
    'unicorn/prefer-set-has': 'error',
    // Prefer `Array.from` for performance benefits.
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-ternary': 'error',
    // Type checks are performed by TypeScript compiler.
    'unicorn/prefer-type-error': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkDefaultAndNamespaceImports: true,
        checkFilenames: true,
        checkProperties: true,
        checkShorthandImports: true,
        checkVariables: true,
        replacements: {
          //  Allow `i18n`.
          i: false,
        },
      },
    ],
    // No good use cases yet.
    'unicorn/string-content': 'off',
    'unicorn/throw-new-error': 'error',
  },
};
