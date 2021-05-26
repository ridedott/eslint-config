/* cspell:ignore lcov */
/* eslint-disable import/no-default-export */

import type { Config } from '@jest/types';

const configuration: Config.InitialOptions = {
  cacheDirectory: '<rootDir>/.cache/jest',
  logHeapUsage: true,
  restoreMocks: true,
  roots: ['<rootDir>'],
  testEnvironment: 'node',
};

export default configuration;
