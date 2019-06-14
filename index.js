module.exports = {
  extends: [
    'eslint:all',
    './rules/eslint.js',
    './rules/immutable.js',
    './rules/jest.js',
    './rules/simple-import-sort.js',
    './rules/typescript.js',
    'prettier',
    'prettier/@typescript-eslint',
    './rules/overrides.js',
  ],
  plugins: ['@typescript-eslint', 'immutable', 'jest', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
};
