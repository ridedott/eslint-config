import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslintPlugin from 'typescript-eslint';

import arrayFuncConfig from './configs/array-func.js';
import eslintConfig from './configs/eslint.js';
import eslintCommentsConfig from './configs/eslint-comments.js';
import functionalConfig from './configs/functional.js';
import importConfig from './configs/import.js';
import simpleImportSortConfig from './configs/simple-import-sort.js';
import stylisticConfig from './configs/stylistic.js';
import unicornConfig from './configs/unicorn.js';
import typescriptConfig from './configs/typescript.js';

const configs = [
  arrayFuncConfig,
  eslintCommentsConfig,
  eslintConfig,
  functionalConfig,
  importConfig,
  simpleImportSortConfig,
  typescriptConfig,
  unicornConfig,
];

const makeOptionsConfig = () => ({
  languageOptions: {
    globals: { ...globals.node },
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

export const makeConfig = (additionalConfigs = []) => [
  ...configs.flat(),
  ...additionalConfigs.flat(),
  makeOptionsConfig(),
  // eslint-config-prettier should have the opportunity to override other configs, so is last
  eslintConfigPrettier,
  // eslint-config-prettier overrides some @stylistic rules. Set them back.
  ...stylisticConfig,
  // ...alsoConfigs.flat(),
];

export const makeConfigESM = (additionalConfigs = []) => [
  ...configs.flat(),
  ...additionalConfigs.flat(),
  {
    ...makeOptionsConfig(),
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
  // eslint-config-prettier overrides some @stylistic rules. Set them back.
  ...stylisticConfig,
];
