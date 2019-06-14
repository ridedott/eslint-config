module.exports = {
  extends: [
    'eslint:all',
    './rules/array-func.js',
    './rules/eslint.js',
    './rules/immutable.js',
    './rules/jest.js',
    './rules/typescript.js',
    'prettier',
    'prettier/@typescript-eslint',
    './rules/overrides.js',
  ],
  plugins: ['@typescript-eslint', 'array-func', 'immutable', 'jest'],
  parser: '@typescript-eslint/parser',
};
