module.exports = {
  extends: [
    'eslint:all',
    './rules/eslint-comments.js',
    './rules/eslint.js',
    './rules/immutable.js',
    './rules/jest.js',
    './rules/typescript.js',
    './rules/unicorn.js',
    'prettier',
    'prettier/@typescript-eslint',
    './rules/overrides.js',
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'immutable',
    'jest',
    'unicorn',
  ],
  parser: '@typescript-eslint/parser',
};
