const typescriptEslint = require('typescript-eslint');
const arrayFunc = require('eslint-plugin-array-func');
const eslintComments = require('eslint-plugin-eslint-comments');
const functional = require('eslint-plugin-functional');
const _import = require('eslint-plugin-import');
const jestPlugin = require('eslint-plugin-jest');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const unicorn = require('eslint-plugin-unicorn');
const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');

const arrayFuncConfig = require('./rules/array-func');
const eslintConfig = require('./rules/eslint');
const eslintCommentsConfig = require('./rules/eslint-comments');
const functionalConfig = require('./rules/functional');
const importConfig = require('./rules/import');
const jestConfig = require('./rules/jest');
const simpleImportSortConfig = require('./rules/simple-import-sort');
const unicornConfig = require('./rules/unicorn');
const typescriptConfig = require('./rules/typescript');

module.exports = [
  js.configs.all,
  ...typescriptEslint.configs.all,
  _import.configs.typescript,
  arrayFuncConfig,
  eslintCommentsConfig,
  eslintConfig,
  functionalConfig,
  importConfig,
  jestConfig,
  simpleImportSortConfig,
  typescriptConfig,
  unicornConfig,
  {
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
      'array-func': arrayFunc,
      'eslint-comments': eslintComments,
      functional,
      import: _import,
      jest: jestPlugin,
      'simple-import-sort': simpleImportSort,
      unicorn,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        project: 'tsconfig.json',
      },
    },

    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    }
  },
  {
    files: ['test/*.ts'],
    ...jestPlugin.configs.all,
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      'unicorn/no-unsafe-regex': 'off',
    },
  },
  {
    files: ['test/fixtures/**'],
    rules: {
      'jest/require-hook': 'off',
      'unicorn/filename-case': 'off',
    },
  },
  // eslint-config-prettier should have the opportunity to override other configs, so is last
  eslintConfigPrettier,
];
