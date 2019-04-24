module.exports = {
  extends: [
    'eslint:all',
    './rules/eslint.js',
    './rules/immutable.js',
    './rules/jest.js',
    './rules/typescript.js',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'immutable', 'jest'],
  parser: '@typescript-eslint/parser',
};
