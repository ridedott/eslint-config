import { rules as ridedottEslintRules } from '@ridedott/eslint-plugin';
import { rules as typescriptEslintRules } from '@typescript-eslint/eslint-plugin';
import { ESLint, Linter } from 'eslint';
import { rules as arrayFunctionRules } from 'eslint-plugin-array-func';
import { rules as eslintCommentsRules } from 'eslint-plugin-eslint-comments';
import { rules as immutableRules } from 'eslint-plugin-immutable';
import { rules as importRules } from 'eslint-plugin-import';
import { rules as jestRules } from 'eslint-plugin-jest';
import { rules as simpleImportSortRules } from 'eslint-plugin-simple-import-sort';
import { rules as unicornRules } from 'eslint-plugin-unicorn';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

import * as arrayFunction from '../rules/array-func';
import * as eslint from '../rules/eslint';
import * as eslintComments from '../rules/eslint-comments';
import * as immutable from '../rules/immutable';
import * as importConfiguredRules from '../rules/import';
import * as jestConfiguredRules from '../rules/jest';
import * as overrides from '../rules/overrides';
import * as ridedottPlugin from '../rules/ridedott';
import * as simpleImportSort from '../rules/simple-import-sort';
import * as typescriptEslint from '../rules/typescript';
import * as unicorn from '../rules/unicorn';
import * as fixturesPromises from './fixtures';

/*
 * Test utilities
 */

const cli = new ESLint();
const linter = new Linter();

const eslintRules = Object.fromEntries(linter.getRules());

const configuredRules = {
  arrayFunc: arrayFunction,
  eslint,
  eslintComments,
  immutable,
  import: importConfiguredRules,
  jest: jestConfiguredRules,
  overrides,
  ridedott: ridedottPlugin,
  simpleImportSort,
  typescriptEslint,
  unicorn,
} as const;

const configuredRulesToOriginalMap = {
  arrayFunc: arrayFunctionRules,
  eslint: eslintRules,
  eslintComments: eslintCommentsRules,
  immutable: immutableRules,
  import: importRules,
  jest: jestRules,
  overrides: eslintRules,
  ridedott: ridedottEslintRules,
  simpleImportSort: simpleImportSortRules,
  typescriptEslint: typescriptEslintRules,
  unicorn: unicornRules,
};

const fixtureFilePath = (ruleSet: string): string => {
  const BASE_PATH = 'test/fixtures';

  if (ruleSet === 'eslint') {
    return `${BASE_PATH}/eslint/`;
  }

  if (ruleSet === 'overrides') {
    return `${BASE_PATH}/overrides/`;
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
  const results = cli.lintText(fixture, {
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
  (ruleSet: string): void => {
    describe.each(Object.keys(configuredRules[ruleSet].rules))(
      '%s',
      (configuredRule: string): void => {
        const ruleName = getRuleName(configuredRule);

        if (configuredRules[ruleSet].rules[configuredRule] === 'off') {
          return;
        }

        it(`exists in the current version of ${ruleSet}`, (): void => {
          expect.assertions(1);

          expect(
            configuredRulesToOriginalMap[ruleSet][ruleName],
          ).not.toBeUndefined();
        });

        it('passes on a valid fixture', async (): Promise<void> => {
          expect.assertions(3);

          const result = await lintFixture({
            configuredRule,
            ruleName,
            ruleSet,
            type: 'pass',
          });

          expect(result.warningCount).toStrictEqual(0);
          expect(result.messages).toStrictEqual([]);
          expect(result.errorCount).toStrictEqual(0);
        });

        it('fails on an invalid fixture', async (): Promise<void> => {
          expect.assertions(3);

          const result = await lintFixture({
            configuredRule,
            ruleName,
            ruleSet,
            type: 'fail',
          });

          expect(result.warningCount).toStrictEqual(0);
          expect(result.errorCount).toBeGreaterThan(0);
          expect(result.messages).toMatchSnapshot();
        });
      },
    );
  },
);
