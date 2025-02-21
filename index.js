import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import typescriptEslintPlugin from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';
import arrayFuncPlugin from 'eslint-plugin-array-func';
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import eslintPluginFunctional from 'eslint-plugin-functional';
import jestPlugin from 'eslint-plugin-jest';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unicornPlugin from 'eslint-plugin-unicorn';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

import arrayFuncConfig from './rules/array-func.js';
import eslintConfig from './rules/eslint.js';
import eslintCommentsConfig from './rules/eslint-comments.js';
import functionalConfig from './rules/functional.js';
import importConfig from './rules/import.js';
import jestConfig from './rules/jest.js';
import simpleImportSortConfig from './rules/simple-import-sort.js';
import stylisticConfig from './rules/stylistic.js';
import unicornConfig from './rules/unicorn.js';
import typescriptConfig from './rules/typescript.js';

export default [
  eslint.configs.all,
  ...typescriptEslintPlugin.configs.all,
  eslintPluginImport.configs.typescript,
  jestPlugin.configs['flat/all'],
  unicornPlugin.configs['flat/recommended'],

  arrayFuncConfig,
  eslintCommentsConfig,
  eslintConfig,
  functionalConfig,
  importConfig,
  jestConfig,
  simpleImportSortConfig,
  stylisticConfig,
  typescriptConfig,
  unicornConfig,
  {
    plugins: {
      '@stylistic': stylistic,
      'array-func': arrayFuncPlugin,
      'eslint-comments': eslintCommentsPlugin,
      functional: eslintPluginFunctional,
      import: eslintPluginImport,
      'simple-import-sort': simpleImportSortPlugin,
    },

    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
      parser: typescriptEslintPlugin.parser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
      },
    },

    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  // eslint-config-prettier should have the opportunity to override other configs, so is last
  eslintConfigPrettier,
];
