module.exports = {
  rules: {
    // This is covered by @typescript-eslint/camelcase rule.
    camelcase: 'off',
    'capitalized-comments': ['error', 'always', { ignorePattern: 'cspell' }],
    // TypeScript will always make sure return values are correct.
    'consistent-return': 'off',
    // This is handled by @typescript-eslint/member-ordering.
    'grouped-accessor-pairs': 'off',
    // Ignored properties in TypeScript consist of underscores.
    'id-length': ['error', { exceptions: ['_', '__', '___', '____'] }],
    // Using functions and firestore, and Prettier formatting result in extra
    // lines being used.
    'max-lines-per-function': ['error', { max: 70 }],
    // Using functions and firestore result in a higher number of statements
    // being used.
    'max-statements': ['error', { max: 15 }],
    // Duplicate of @typescript-eslint/no-array-constructor.
    'no-array-constructor': 'off',
    // Safety of this pattern is achieved by typechecking.
    'no-constructor-return': 'off',
    // Duplicate of @typescript-eslint/no-empty-function.
    'no-empty-function': 'off',
    // Duplicate of @typescript-eslint/no-magic-numbers.
    'no-magic-numbers': 'off',
    // Ternary operators are helpful to write immutable code.
    'no-nested-ternary': 'off',
    // Prettier automatically inserts semicolons, so there is no way to that
    // automatic semicolon insertion might happen.
    'no-plusplus': 'off',
    // Inferior to @typescript-eslint/return-await.
    'no-return-await': 'off',
    // This is impossible with typechecking.
    'no-setter-return': 'off',
    // Ternary operators are helpful to write immutable code.
    'no-ternary': 'off',
    // Unnecessary in TypeScript projects.
    'no-undef': 'off',
    // Only applicable to ECMAScript 3.
    'no-undefined': 'off',
    // Duplicate of @typescript-eslint/no-unused-vars.
    'no-unused-vars': 'off',
    // Duplicate of @typescript-eslint/no-use-before-define.
    'no-use-before-define': 'off',
    // Conflicts with unicorn/expiring-todo-comments.
    'no-warning-comments': 'off',
    'one-var': ['error', 'never'],
    // For more cases, see the following link:
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: '*', next: 'do' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: '*', next: 'throw' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'with' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'always', prev: 'do', next: '*' },
      { blankLine: 'always', prev: 'for', next: '*' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: 'throw', next: '*' },
      { blankLine: 'always', prev: 'try', next: '*' },
    ],
    // Prefer `Array.from` for performance benefits.
    'prefer-spread': 'off',
    // Although it might catch some unintentional leftovers of refactoring, the
    // performance gain is marginal. In many places lack of `async` keyword
    // decreases readability.
    'require-await': 'off',
    // Code should be formatted using Prettier.
    semi: 'off',
    // This is handled by simple-import-sort plugin.
    'sort-imports': 'off',
  },
};
