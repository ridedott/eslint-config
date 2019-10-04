# eslint-config

[![license: MIT](https://img.shields.io/github/license/ridedott/eslint-config)](https://github.com/ridedott/eslint-config/blob/master/LICENSE)
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
`.eslintrc.yaml` file. An example configuration:

```yaml
env:
  es6: true
  node: true
extends: '@ridedott/eslint-config'
overrides:
  - env:
      jest: true
    files:
      - __mocks__/**/*.ts
      - src/**/*.spec.ts
      - test/**/*.ts
    rules:
      '@typescript-eslint/no-magic-numbers': off
      max-lines-per-function: off
      max-statements: off
      no-magic-numbers: off
      unicorn/no-unsafe-regex: off
  - files:
      - scripts/**/*.ts
    rules:
      no-console: off
  - files:
      - __mocks__/**/*.ts
    rules:
      unicorn/filename-case: off
parserOptions:
  ecmaVersion: 2020
  project: tsconfig.json
  sourceType: module
```

and a script in your `package.json` which will help you run ESLint with correct
dependencies:

```json
{
  "scripts": {
    "lint": "eslint --resolve-plugins-relative-to './node_modules/@ridedott/eslint-config' '**/*.ts'"
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
  "eslint.autoFixOnSave": true,
  "eslint.codeAction.disableRuleComment": {
    "enable": true,
    "location": "sameLine"
  },
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.enable": true,
  "eslint.options": {
    "resolvePluginsRelativeTo": "./node_modules/@ridedott/eslint-config"
  },
  "eslint.run": "onType",
  "eslint.validate": [
    {
      "autoFix": true,
      "language": "typescript"
    }
  ]
}
```

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See usage notes on how to
consume this package in your project.

### Prerequisites

Minimal requirements to set up the project:

- [Node.js](https://nodejs.org/en) v10, installation instructions can be found
  on the official website, a recommended installation option is to use
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

Go the the right directory and install dependencies:

```bash
cd eslint-config
npm install
```

That's it! You can now go to the next step.

## Tests

This repository does not contain any source code, just the configuration, so no
tests are present.

### Formatting

This project uses [Prettier](https://prettier.io) to automate formatting. All
supported files are being reformatted in a precommit hook. You can also use one
of the two scripts to validate and optionally fix all of the files:

```bash
npm run format
npm run format:fix
```

## Publishing

Publishing is handled in an automated way and must not be performed manually.

Each commit to the master branch is automatically deployed to the NPM registry
with a version specified in `package.json`. All other commits are published as
pre-releases.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Built with

### Automation

- [Google Cloud Build](https://cloud.google.com/cloud-build/)

## Versioning

This project adheres to [Semantic Versioning](http://semver.org) v2.
