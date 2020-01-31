import { CLIEngine, Linter } from 'eslint';
import { rules as arrayFuncRules } from 'eslint-plugin-array-func';

import * as ourRules from '../rules';
import * as fixtures from './fixtures';

/*
 * Test utilities
 */

 interface VerifyResponse {
  [key: string]: unknown,
  warningCount: number,
  messages: [],
  errorCount: number,
 }

const cli = new CLIEngine();
const linter = new Linter();

const eslintRules = Object.fromEntries(linter.getRules());

const ourRulesToOriginalMap = {
  arrayFunc: arrayFuncRules,
  eslint: eslintRules,
};

const verifyFixture = ({
  ruleSet,
  ruleName,
  ourRule,
  type,
}: {
  ruleSet: string;
  ruleName: string;
  ourRule: string;
  type: 'pass' | 'fail';
}): VerifyResponse => {
  if (fixtures[ruleSet][ruleName] === undefined) {
    throw new Error(`Missing fixtures for ${ruleSet}/${ruleName}`);
  }

  const fixture = fixtures[ruleSet][ruleName][type];
  const report = cli.executeOnText(
    fixture,
    ruleSet === 'eslint'
      ? `test/fixtures/eslint/${ourRule}.${type}.ts`
      : `test/fixtures/${ourRule}.${type}.ts`,
  );

  return report.results[0];
};

const getRuleName = (ourRule: string): string => {
  /**
   * Rules from plugins are prefixed but rules from Eslint are not.
   */
  const regex = /(?:.*)\/(?<prefixed>.*)|(?<unPrefixed>.*)/u;

  const match = regex.exec(ourRule);

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
describe.each(Object.keys(ourRules))('%s rules', (ruleSet: string): void => {
  describe.each(Object.keys(ourRules[ruleSet].rules))(
    '%s',
    (ourRule: string): void => {
      const ruleName = getRuleName(ourRule);

      if (
        ourRules[ruleSet].rules[ourRule] === 'off'
      ) {
        return;
      }

      it(`should exist in the current version of ${ruleSet}`, (): void => {
        expect.assertions(1);

        expect(ourRulesToOriginalMap[ruleSet][ruleName]).not.toBeUndefined();
      });

      it('should pass', (): void => {
        expect.assertions(3);

        const result = verifyFixture({
          ourRule,
          ruleName,
          ruleSet,
          type: 'pass',
        });

        expect(result.warningCount).toStrictEqual(0);
        expect(result.messages).toStrictEqual([]);
        expect(result.errorCount).toStrictEqual(0);
      });

      it('should fail', (): void => {
        expect.assertions(2);

        const result = verifyFixture({
          ourRule,
          ruleName,
          ruleSet,
          type: 'fail',
        });

        expect(result.warningCount).toStrictEqual(0);
        expect(result.errorCount).toBeGreaterThan(0);
      });
    },
  );
});
