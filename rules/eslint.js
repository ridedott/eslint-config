module.exports = {
  rules: {
    'capitalized-comments': ['error', 'always', { ignorePattern: 'cspell' }],
    // TypeScript will always make sure return values are correct.
    'consistent-return': 'off',
    // Ignored properties in TypeScript consist of underscores.
    'id-length': ['error', { exceptions: ['_', '__', '___', '____'] }],
    // Ternary operators are helpful to write immutable code.
    'no-nested-ternary': 'off',
    // Prettier automatically inserts semicolons, so there is no way to that
    // automatic semicolon insertion might happen.
    'no-plusplus': 'off',
    // Ternary operators are helpful to write immutable code.
    'no-ternary': 'off',
    // Duplicate of @typescript-eslint/no-use-before-define.
    'no-use-before-define': 'off',
    'one-var': ['error', 'never'],
    // Although it might catch some unintentional leftovers of refactoring, the
    // performance gain is marginal. In many places lack of `async` keyword
    // decreases readability.
    'require-await': 'off',
    'sort-imports': ['error', { ignoreCase: true }],
  },
};
