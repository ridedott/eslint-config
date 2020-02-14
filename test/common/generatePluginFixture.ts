/** cspell:ignore promisify */
import { readdir, readFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);

const fixtureFileRegex = /(?<ruleName>[^.]*)\.(?<fileKey>[^.]*)\.(?:.*)/u;

export const generatePluginFixture = async (
  pluginFixturePath: string,
): Promise<{}> => {
  const fixtureFiles = await readdirAsync(pluginFixturePath);

  return fixtureFiles.reduce(
    async (fixtureP: Promise<{}>, fileName: string): Promise<{}> => {
      const fixture = await fixtureP;

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
