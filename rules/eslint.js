module.exports = {
  rules: {
    'capitalized-comments': ['error', 'always', { ignorePattern: 'cspell' }],
    // TypeScript will always make sure return values are correct.
    'consistent-return': 'off',
    // Prettier automatically inserts semicolons, so there is no way to that
    // automatic semicolon insertion might happen.
    'no-plusplus': 'off',
    // Ternary operators are helpful to write immutable code.
    'no-ternary': 'off',
    // Duplicate of @typescript-eslint/no-use-before-define.
    'no-use-before-define': 'off',
    'one-var': ['error', 'never'],
    'sort-imports': ['error', { ignoreCase: true }],
  },
};
