module.exports = {
  rules: {
    // This is covered by @typescript-eslint/camelcase rule.
    camelcase: 'off',
    'capitalized-comments': ['error', 'always', { ignorePattern: 'cspell' }],
    // TypeScript will always make sure return values are correct.
    'consistent-return': 'off',
    // Ignored properties in TypeScript consist of underscores.
    'id-length': ['error', { exceptions: ['_', '__', '___', '____'] }],
    // Duplicate of @typescript-eslint/no-array-constructor.
    'no-array-constructor': 'off',
    // Duplicate of @typescript-eslint/no-magic-numbers.
    'no-magic-numbers': 'off',
    // Ternary operators are helpful to write immutable code.
    'no-nested-ternary': 'off',
    // Prettier automatically inserts semicolons, so there is no way to that
    // automatic semicolon insertion might happen.
    'no-plusplus': 'off',
    // Ternary operators are helpful to write immutable code.
    'no-ternary': 'off',
    // Only applicable to ECMAScript 3.
    'no-undefined': 'off',
    // Duplicate of @typescript-eslint/no-unused-vars.
    'no-unused-vars': 'off',
    // Duplicate of @typescript-eslint/no-use-before-define.
    'no-use-before-define': 'off',
    'one-var': ['error', 'never'],
    // For more cases, see the following link:
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: '*', next: 'do' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'with' },
    ],
    // Although it might catch some unintentional leftovers of refactoring, the
    // performance gain is marginal. In many places lack of `async` keyword
    // decreases readability.
    'require-await': 'off',
    // Code should be formatted using Prettier.
    semi: 'off',
    'sort-imports': ['error', { ignoreCase: true }],
  },
};
