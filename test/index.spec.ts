import * as fixtures from './fixtures';
import { rules as arrayFuncRules } from 'eslint-plugin-array-func';
import { rules as eslintCommentsRules } from 'eslint-plugin-eslint-comments';
import { rules as immutableRules } from 'eslint-plugin-immutable';
import { rules as jestRules } from 'eslint-plugin-jest';
import { rules as simpleImportSortRules } from 'eslint-plugin-simple-import-sort';
import { rules as typescriptEslintRules } from '@typescript-eslint/eslint-plugin';
import { rules as unicornRules } from 'eslint-plugin-unicorn';
import { Linter, CLIEngine } from 'eslint';

import * as ourRules from '../rules';

/*
 * Test utilities
 */

const cli = new CLIEngine();
const linter = new Linter();

const eslintRules = Object.fromEntries(linter.getRules());

const ourRulesToOriginalMap = {
  arrayFunc: arrayFuncRules,
  eslint: eslintRules,
  eslintComments: eslintCommentsRules,
  immutable: immutableRules,
  jest: jestRules,
  overrides: eslintRules,
  simpleImportSort: simpleImportSortRules,
  typescriptEslint: typescriptEslintRules,
  unicorn: unicornRules,
};

const verifyFixture = (
  ruleSet: string,
  ruleName: string,
  ourRule: string,
  type: 'pass' | 'fail',
) => {
  if (fixtures[ruleSet][ruleName] == undefined) {
    throw new Error(`Missing fixtures for ${ruleSet}/${ruleName}`);
  }

  const fixture = fixtures[ruleSet][ruleName][type];
  const report = cli.executeOnText(
    fixture,
    ruleSet !== 'eslint'
      ? `test/fixtures/${ourRule}.${type}.ts`
      : `test/fixtures/eslint/${ourRule}.${type}.ts`,
  );

  return report.results[0];
};

const getRuleName = ourRule => {
  /**
   * Rules from plugins are prefixed but rules from Eslint are not.
   */
  const regex = /(?:.*)\/(?<prefixed>.*)|(?<unPrefixed>.*)/u;

  const match = ourRule.match(regex);

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
 * Tests
 */
describe.each(Object.keys(ourRules))('%s rules', ruleSet => {
  describe.each(Object.keys(ourRules[ruleSet].rules))('%s', ourRule => {
    const ruleName = getRuleName(ourRule);
    if (ourRules[ruleSet].rules[ourRule] === 'off' || ruleSet !== 'eslintComments') {
      return;
    }

    it(`should exist in the current version of ${ruleSet}`, () => {
      expect(ourRulesToOriginalMap[ruleSet][ruleName]).not.toBeUndefined();
    });

    it('should pass', () => {
      const result = verifyFixture(ruleSet, ruleName, ourRule, 'pass');

      expect(result.warningCount).toStrictEqual(0);
      expect(result.messages).toStrictEqual([]);
      expect(result.errorCount).toStrictEqual(0);
    });

    it('should fail', () => {
      const result = verifyFixture(ruleSet, ruleName, ourRule, 'fail');

      expect(result.warningCount).toStrictEqual(0);
      expect(result.errorCount).toBeGreaterThan(0);
    });
  });
});
