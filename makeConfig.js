import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslintPlugin from 'typescript-eslint';

import arrayFuncConfig from './configs/array-func.js';
import eslintConfig from './configs/eslint.js';
import eslintCommentsConfig from './configs/eslint-comments.js';
import functionalConfig from './configs/functional.js';
import importConfig from './configs/import.js';
import jestConfig from './configs/jest.js';
import simpleImportSortConfig from './configs/simple-import-sort.js';
import stylisticConfig from './configs/stylistic.js';
import unicornConfig from './configs/unicorn.js';
import typescriptConfig from './configs/typescript.js';
import vitestConfig from './configs/vitest.js';

const configs = [
  arrayFuncConfig,
  eslintCommentsConfig,
  eslintConfig,
  functionalConfig,
  importConfig,
  simpleImportSortConfig,
  stylisticConfig,
  typescriptConfig,
  unicornConfig,
];

const makeOptionsConfig = (additionalGlobals = {}) => ({
  languageOptions: {
    globals: { ...additionalGlobals, ...globals.node },
    parser: typescriptEslintPlugin.parser,
    ecmaVersion: 2020,
    sourceType: 'module',
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },

  linterOptions: { reportUnusedDisableDirectives: 'error' },
});

export const makeConfig = (additionalConfigs = [], additionalGlobals = {}) => [
  ...configs.flat(),
  ...additionalConfigs.flat(),
  makeOptionsConfig(additionalGlobals),
  // eslint-config-prettier should have the opportunity to override other configs, so is last
  eslintConfigPrettier,
];

export const makeConfigESM = (
  additionalConfigs = [],
  additionalGlobals = {},
) => [
  ...configs.flat(),
  ...additionalConfigs.flat(),
  {
    ...makeOptionsConfig(additionalGlobals),
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  // eslint-config-prettier should have the opportunity to override other configs, so is last
  eslintConfigPrettier,
];
