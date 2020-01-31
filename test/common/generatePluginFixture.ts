import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

const fixtureFileRegex = /(?<ruleName>[^\.]*)\.(?<fileKey>[^\.]*)\.(?:.*)/u;

export const generatePluginFixture = (pluginFixturePath: string): {} => {
  const fixtureFiles = readdirSync(pluginFixturePath);

  return fixtureFiles.reduce((fixture: {}, fileName: string): {} => {
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

    const fixtureContent = readFileSync(join(pluginFixturePath, fileName), {
      encoding: 'utf-8',
    });

    return {
      ...fixture,
      [ruleName]: {
        ...fixture[ruleName],
        [fileKey]: fixtureContent,
      },
    };
  }, {});
};
