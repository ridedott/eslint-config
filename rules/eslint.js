export default {
  rules: {
    // This is covered by @typescript-eslint/camelcase rule.
    camelcase: 'off',
    'capitalized-comments': [
      'error',
      'always',
      { block: { ignorePattern: 'cspell|c8' } },
    ],
    // TypeScript will always make sure return values are correct.
    'consistent-return': 'off',
    // Duplicate of @typescript-eslint/dot-notation.
    'dot-notation': 'off',
    // Use lambda expressions.
    'func-names': ['error', 'never', { generators: 'never' }],
    // This is handled by @typescript-eslint/member-ordering.
    'grouped-accessor-pairs': 'off',
    // Ignored properties in TypeScript consist of underscores.
    'id-length': ['error', { exceptions: ['_', '__', '___', '____'] }],
    // Using functions and firestore, and Prettier formatting result in extra
    // lines being used.
    // Duplicate of @typescript-eslint/lines-between-class-members.
    'lines-between-class-members': 'off',
    // This rule was initially enabled, however in practice it appears that
    // developers can judge better if the file is too large or not, with many
    // valid exceptions created over time.
    'max-lines': 'off',
    // This rule was initially enabled, however in practice it appears that
    // developers often struggle to restructure code to adere, which lowers
    // overall productivity.
    'max-lines-per-function': 'off',
    // Using functions and firestore result in a higher number of statements
    // being used.
    'max-statements': ['error', { max: 15 }],
    // Duplicate of @typescript-eslint/no-array-constructor.
    'no-array-constructor': 'off',
    // Duplicate of unicorn/no-new-buffer.
    'no-buffer-constructor': 'off',
    // Safety of this pattern is achieved by typechecking.
    'no-constructor-return': 'off',
    // Sometimes it makes code less readable. TypeScript already ensures that
    // all code paths return a value, so it does not increase safety, only
    // enforces a certain style.
    'no-else-return': 'off',
    // Duplicate of @typescript-eslint/no-empty-function.
    'no-empty-function': 'off',
    // Duplicate of @typescript-eslint/no-invalid-this.
    'no-invalid-this': 'off',
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
    // Conflicts with @typescript-eslint/init-declarations.
    'no-undef-init': 'off',
    // Only applicable to ECMAScript 3.
    'no-undefined': 'off',
    // Covered by the TypeScript compiler error TS7027.
    'no-unreachable': 'off',
    // Duplicate of @typescript-eslint/no-unused-vars.
    'no-unused-vars': 'off',
    // Duplicate of @typescript-eslint/no-use-before-define.
    'no-use-before-define': 'off',
    // Conflicts with unicorn/expiring-todo-comments.
    'no-warning-comments': 'off',
    'one-var': ['error', 'never'],
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
    // This is handled by sort-keys-fix plugin.
    'sort-keys': 'off',
    // This is handled by typescript-eslint plugin.
    'init-declarations': 'off',
  },
};
