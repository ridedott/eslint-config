import { rules as ridedottEslintRules } from '@ridedott/eslint-plugin';
import { rules as typescriptEslintRules } from '@typescript-eslint/eslint-plugin';
import { CLIEngine, Linter } from 'eslint';
import { rules as arrayFuncRules } from 'eslint-plugin-array-func';
import { rules as eslintCommentsRules } from 'eslint-plugin-eslint-comments';
import { rules as immutableRules } from 'eslint-plugin-immutable';
import { rules as jestRules } from 'eslint-plugin-jest';
import { rules as simpleImportSortRules } from 'eslint-plugin-simple-import-sort';
import { rules as unicornRules } from 'eslint-plugin-unicorn';

import * as arrayFunc from '../rules/array-func';
import * as eslint from '../rules/eslint';
import * as eslintComments from '../rules/eslint-comments';
import * as immutable from '../rules/immutable';
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

interface VerifyResponse {
  [key: string]: unknown;
  errorCount: number;
  messages: [];
  warningCount: number;
}

const cli = new CLIEngine();
const linter = new Linter();

const eslintRules = Object.fromEntries(linter.getRules());

const configuredRules = {
  arrayFunc,
  eslint,
  eslintComments,
  immutable,
  jest: jestConfiguredRules,
  overrides,
  ridedott: ridedottPlugin,
  simpleImportSort,
  typescriptEslint,
  unicorn,
};

const configuredRulesToOriginalMap = {
  arrayFunc: arrayFuncRules,
  eslint: eslintRules,
  eslintComments: eslintCommentsRules,
  immutable: immutableRules,
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
  type: 'pass' | 'fail';
}): Promise<VerifyResponse> => {
  const ruleSetFixtures = await fixturesPromises[ruleSet];
  const ruleFixtures = ruleSetFixtures[ruleName];

  if (ruleFixtures === undefined) {
    throw new Error(`Missing fixtures for ${ruleSet}/${ruleName}`);
  }

  const fixture = ruleFixtures[type];
  const report = cli.executeOnText(
    fixture,
    `${fixtureFilePath(ruleSet)}/${configuredRule}.${type}.ts`,
  );

  return report.results[0];
};

const getRuleName = (configuredRule: string): string => {
  /**
   * Rules from plugins are prefixed but rules from Eslint are not.
   */
  const regex = /(?:.*)\/(?<prefixed>.*)|(?<unPrefixed>.*)/u;

  const match = regex.exec(configuredRule);

  if (match === null) {
    return;
  }

  const { groups } = match;

  if (groups === undefined) {
    return;
  }

  const { prefixed, unPrefixed } = groups;

  return prefixed === undefined ? unPrefixed : prefixed;
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

        it(`should exist in the current version of ${ruleSet}`, (): void => {
          expect.assertions(1);

          expect(
            configuredRulesToOriginalMap[ruleSet][ruleName],
          ).not.toBeUndefined();
        });

        it('should pass on a valid fixture', async (): Promise<void> => {
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

        it('should fail on an invalid fixture', async (): Promise<void> => {
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
