module.exports = {
  extends: [
    'eslint:all',
    './rules/eslint.js',
    './rules/immutable.js',
    './rules/typescript.js',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['immutable', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
};
