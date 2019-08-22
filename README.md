# eslint-config

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Safety-oriented, fp-first configuration of ESLint.

## Usage

To use this configuration, install it as a `devDependency` first, alongside
ESLint itself:

```bash
npm install --save-dev @ridedott/eslint-config eslint
```

Once it's finished, add an ESLint configuration to your project. An example
configuration:

```json
{
  "env": {
    "node": true
  },
  "extends": "@ridedott/eslint-config",
  "overrides": [
    {
      "env": {
        "jest": true,
        "node": true
      },
      "files": ["src/**/*spec.ts"],
      "rules": {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "no-magic-numbers": "off"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": 10,
    "project": "tsconfig.json",
    "sourceType": "module"
  }
}
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
