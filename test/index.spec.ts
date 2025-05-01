import { plugin as typescriptEslintPlugin } from 'typescript-eslint';
import { rules as arrayFunctionRules } from 'eslint-plugin-array-func';
import { rules as eslintCommentsRules } from 'eslint-plugin-eslint-comments';
import eslintPluginFunctional from 'eslint-plugin-functional';
import { rules as importRules } from 'eslint-plugin-import';
import { rules as jestRules } from 'eslint-plugin-jest';
import { rules as simpleImportSortRules } from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginStylistic from '@stylistic/eslint-plugin';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { ESLint } from 'eslint';
import eslint from '@eslint/js';

import arrayFunc from '../configs/array-func.js';
import eslintConfigured from '../configs/eslint.js';
import eslintComments from '../configs/eslint-comments.js';
import functional from '../configs/functional.js';
import importConfigured from '../configs/import.js';
import jestConfigured from '../configs/jest.js';
import simpleImportSort from '../configs/simple-import-sort.js';
import stylisticConfigured from '../configs/stylistic.js';
import typescriptEslint from '../configs/typescript.js';
import unicorn from '../configs/unicorn.js';
import * as fixturesPromises from './fixtures/index.js';

/*
 * Test utilities
 */

const cli = new ESLint();

const configuredRules = {
  arrayFunc: arrayFunc[0].rules,
  eslint: eslintConfigured[0].rules,
  eslintComments: eslintComments[0].rules,
  functional: functional[0].rules,
  import: importConfigured[0].rules,
  jest: jestConfigured[0].rules,
  simpleImportSort: simpleImportSort[0].rules,
  stylistic: stylisticConfigured[0].rules,
  typescriptEslint: typescriptEslint[2].rules,
  unicorn: unicorn[0].rules,
} as const;

const configuredRulesToOriginalMap = {
  arrayFunc: arrayFunctionRules,
  eslint: eslint.configs.all.rules,
  eslintComments: eslintCommentsRules,
  functional: eslintPluginFunctional.rules,
  import: importRules,
  jest: jestRules,
  simpleImportSort: simpleImportSortRules,
  stylistic: eslintPluginStylistic.rules,
  typescriptEslint: typescriptEslintPlugin.rules,
  unicorn: eslintPluginUnicorn.rules,
};

const ruleSetPrefix: Record<keyof typeof configuredRules, string | null> = {
  arrayFunc: 'array-func',
  eslint: null,
  eslintComments: 'eslint-comments',
  functional: 'functional',
  import: 'import',
  jest: 'jest',
  simpleImportSort: 'simple-import-sort',
  stylistic: null,
  typescriptEslint: '@typescript-eslint',
  unicorn: 'unicorn',
};

const fixtureFilePath = (ruleSet: string): string => {
  const BASE_PATH = 'test/fixtures';

  if (ruleSet === 'eslint') {
    return `${BASE_PATH}/eslint/`;
  }

  if (ruleSet === 'stylistic') {
    return `${BASE_PATH}/@stylistic/`;
  }

  return `${BASE_PATH}`;
};

const lintFixture = async ({
  configuredRule,
  ruleName,
  ruleSet,
  type,
}: {
  configuredRule: string;
  ruleName: string;
  ruleSet: string;
  type: 'fail' | 'pass';
}): Promise<ESLint.LintResult> => {
  const ruleSetFixtures = await fixturesPromises[`${ruleSet}Fixtures`];
  const ruleFixtures = ruleSetFixtures[ruleName];

  if (ruleFixtures === undefined) {
    writeFileSync(
      resolve(__dirname, 'fixtures', ruleSet, `${ruleName}.fail.ts`),
      'Implement me!',
    );
    writeFileSync(
      resolve(__dirname, 'fixtures', ruleSet, `${ruleName}.pass.ts`),
      'Implement me!',
    );

    throw new Error(`Missing fixtures for ${ruleSet}/${ruleName}.`);
  }

  const fixture = ruleFixtures[type];
  const filePath = `${fixtureFilePath(ruleSet)}/${configuredRule}.${type}.ts`;
  const results = await cli.lintText(fixture, {
    filePath: `${fixtureFilePath(ruleSet)}/${configuredRule}.${type}.ts`,
  });

  return results[0];
};

const getRuleName = (configuredRule: string): string => {
  /**
   * Rules from plugins are prefixed but rules from Eslint are not.
   */
  const regex = /(?:.*)\/(?<prefixed>.*)|(?<unPrefixed>.*)/u;

  const match = regex.exec(configuredRule);

  if (match === null) {
    return 'unknown';
  }

  const { groups } = match;

  if (groups === undefined) {
    return 'unknown';
  }

  const { prefixed, unPrefixed } = groups;

  /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
  return prefixed ?? unPrefixed;
};

/*
 * Tests.
 */
describe.each(Object.keys(configuredRules))(
  '%s rules',
  async (ruleSet: string): Promise<void> => {
    const ruleSetFixtures = await fixturesPromises[`${ruleSet}Fixtures`];

    /**
     * vitest fails if there aren't any tests in a suite,
     * so filter out rules that don't have fixtures or are turned off
     */
    const rulesWithFixtures = Object.keys(configuredRules[ruleSet]).filter(
      (configuredRule) => {
        const ruleName = getRuleName(configuredRule);
        const ruleFixtures = ruleSetFixtures[ruleName];

        return (
          ruleFixtures !== undefined &&
          configuredRules[ruleSet][configuredRule] !== 'off'
        );
      },
    );

    const prefix = ruleSetPrefix[ruleSet];

    /**
     * If there are fixtures for rules that are not explicitly configured by us,
     * but are included in the shared config (for example, as part of recommended configs),
     * run tests for them as well.
     */
    const rulesWithFixturesButNoConfig = Object.keys(ruleSetFixtures).map(
      (ruleName) => `${prefix ? `${prefix}/${ruleName}` : ruleName}`,
    );

    const allRules = Array.from(
      new Set([...rulesWithFixtures, ...rulesWithFixturesButNoConfig]).values(),
    ).sort();

    describe.each(allRules)(
      '%s',
      async (configuredRule: string): Promise<void> => {
        const ruleName = getRuleName(configuredRule);

        it(`exists in the current version of ${ruleSet}`, (): void => {
          expect.assertions(1);

          const rules = configuredRulesToOriginalMap[ruleSet];
          const rule =
            rules instanceof Map ? rules.get(ruleName) : rules[ruleName];
          expect(rule).toBeDefined();
        });

        it('passes on a valid fixture', async (): Promise<void> => {
          expect.assertions(3);

          const result = await lintFixture({
            configuredRule,
            ruleName,
            ruleSet,
            type: 'pass',
          });

          expect(result.warningCount).toBe(0);
          expect(result.messages).toStrictEqual([]);
          expect(result.errorCount).toBe(0);
        });

        it('fails on an invalid fixture', async (): Promise<void> => {
          expect.assertions(3);

          const result = await lintFixture({
            configuredRule,
            ruleName,
            ruleSet,
            type: 'fail',
          });

          expect(result.warningCount).toBe(0);
          expect(result.errorCount).toBeGreaterThan(0);
          expect(result.messages).toMatchSnapshot();
        });
      },
    );
  },
);
