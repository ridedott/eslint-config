# eslint-config

[![license: MIT](https://img.shields.io/github/license/ridedott/eslint-config)](https://github.com/ridedott/eslint-config/blob/master/LICENSE)
[![GitHub Actions Status](https://github.com/ridedott/eslint-config/workflows/Continuous%20Delivery/badge.svg?branch=master)](https://github.com/ridedott/eslint-config/actions)
[![npm version](https://img.shields.io/npm/v/@ridedott/eslint-config)](https://www.npmjs.com/package/@ridedott/eslint-config)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Safety-oriented, fp-first configuration of ESLint.

## Usage

### Basic setup

To use this configuration, install it as a `devDependency` first, alongside
ESLint itself:

```bash
npm install --save-dev @ridedott/eslint-config eslint
```

Once it is finished, add an ESLint configuration to your project in a top-level
`eslint.config.js` file.

**IMPORTANT**: Starting from `@ridedott/eslint-config@3`, the exported
configuration is a flat config (see
[ESLint docs](https://eslint.org/docs/latest/use/migrate-to-9.0.0#-new-default-config-format-eslintconfigjs)
for more details). To use it, please
[migrate](https://eslint.org/docs/latest/use/configure/migration-guide) your
project's configuration to flat config as well.

Multiple versions of the configuration are exported:

- `jest`: the default export, for projects using Jest
- `vitest`: the configuration for projects using Vitest
- `jest-esm`: the configuration for projects using Jest with ESM
- `vitest-esm`: the configuration for projects using Vitest with ESM

An example configuration (using the default export) would look like this:

```js
import sharedConfig from '@ridedott/eslint-config';
// equivalent to each of the following:
// import { jest as sharedConfig } from '@ridedott/eslint-config';
// import sharedConfig from '@ridedott/eslint-config/jest';

export default [
  ...sharedConfig,
  {
    rules: {
      // An example override for a rule configured in @ridedott/eslint-config
      'sort-keys': 'off',
    },
  },
];
```

and a script in your `package.json` which will help you run ESLint with correct
dependencies:

```json
{
  "scripts": {
    "lint": "eslint '**/*.ts'",
    "lint:fix": "eslint --fix '**/*.ts'"
  }
}
```

### Visual Studio Code integration

If you would like to add a [Visual Studio Code](https://code.visualstudio.com)
integration too, consider starting with the following configuration.

Add an extension to the list of suggested ones in `.vscode/extensions.json`:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint"]
}
```

Add ESLint settings to the workspace settings in `.vscode/settings.json`:

```json
{
  "eslint.codeAction.disableRuleComment": {
    "enable": true,
    "location": "separateLine"
  },
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.enable": true,
  "eslint.lintTask.enable": true,
  "eslint.run": "onType",
  "eslint.useFlatConfig": true
}
```

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See usage notes on how to
consume this package in your project.

### Prerequisites

Minimal requirements to set up the project:

- [Node.js](https://nodejs.org/en), installation instructions can be found on
  the official website, a recommended installation option is to use
  [Node Version Manager](https://github.com/creationix/nvm#readme). It can be
  installed in a
  [few commands](https://nodejs.org/en/download/package-manager/#nvm).
- A package manager like [Yarn](https://yarnpkg.com) or
  [npm](https://www.npmjs.com). All instructions in the documentation will
  follow the npm syntax.
- Optionally a [Git](https://git-scm.com) client.

### Installing

Start by cloning the repository:

```bash
git clone git@github.com:ridedott/eslint-config.git
```

In case you don't have a git client, you can get the latest version directly by
using [this link](https://github.com/ridedott/eslint-config/archive/master.zip)
and extracting the downloaded archive.

Go to the right directory and install dependencies:

```bash
cd eslint-config
npm install
npx husky install
```

That's it! You can now go to the next step.

## Tests

This repository does not contain any source code, just the configuration, so no
tests are present.

### Formatting

This project uses [Prettier](https://prettier.io) to automate formatting. All
supported files are being reformatted in a precommit hook. You can also use one
of the two scripts to validate and optionally fix all the files:

```bash
npm run format
npm run format:fix
```

## Publishing

Publishing is handled in an automated way and must not be performed manually.

Each commit to the master branch is automatically deployed to both npm and
GitHub Packages registries with a version specified in `package.json`. All other
commits are published as pre-releases by the integration pipeline.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Built with

### Automation

- [GitHub Actions](https://github.com/features/actions/)

## Versioning

This project adheres to [Semantic Versioning](http://semver.org) v2.

**IMPORTANT** Changes and additions of linting rules are not considered breaking
changes.
