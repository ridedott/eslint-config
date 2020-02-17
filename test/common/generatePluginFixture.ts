/** cspell:ignore promisify */
import { readdir, readFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);

const fixtureFileRegex = /(?<ruleName>[^.]*)\.(?<fileKey>[^.]*)\.(?:.*)/u;

enum FixtureTypes {
  Pass = 'pass',
  Fail = 'fail',
}
interface PluginFixture {
  /** The key is the name of the rule */
  [key: string]: {
    [FixtureType in FixtureTypes]: string;
  };
}

/**
 * Generate a structure to gather passing and failing fixtures of configured
 * rules of a given plugin.
 */
export const generatePluginFixture = async (
  pluginFixturePath: string,
): Promise<PluginFixture> => {
  const fixtureFiles = await readdirAsync(pluginFixturePath);

  return fixtureFiles.reduce(
    async (
      fixturePromise: Promise<PluginFixture>,
      fileName: string,
    ): Promise<PluginFixture> => {
      const fixture = await fixturePromise;

      if (fixtureFileRegex.test(fileName) === false) {
        return fixture;
      }

      const executed = fixtureFileRegex.exec(fileName);

      if (executed === null) {
        return fixture;
      }

      const { groups } = executed;

      if (groups === undefined) {
        return fixture;
      }

      const { ruleName, fileKey } = groups;

      const fixtureContent = await readFileAsync(
        join(pluginFixturePath, fileName),
        {
          encoding: 'utf-8',
        },
      );

      return {
        ...fixture,
        [ruleName]: {
          ...fixture[ruleName],
          [fileKey]: fixtureContent,
        },
      };
    },
    Promise.resolve({}),
  );
};
