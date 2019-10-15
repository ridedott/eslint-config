module.exports = {
  rules: {
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'off',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': [
      'error',
      { allowWarningComments: false },
    ],
    'unicorn/explicit-length-check': ['error', { 'non-zero': 'greater-than' }],
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    // Ternary operators help write immutable code.
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-zero-fractions': 'error',
    // Code should be formatted using Prettier.
    'unicorn/number-literal-case': 'off',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-dataset': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/prefer-flat-map': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    // Prefer `Array.from` for performance benefits.
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-text-content': 'error',
    // Type checks are performed by TypeScript compiler.
    'unicorn/prefer-type-error': 'off',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prevent-abbreviations': [
      'error',
      { checkDefaultAndNamespaceImports: true, checkProperties: true },
    ],
    'unicorn/regex-shorthand': 'error',
    'unicorn/throw-new-error': 'error',
  },
};
