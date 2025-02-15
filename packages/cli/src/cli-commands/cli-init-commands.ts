import { InitCommand } from '@lerna-lite/init';

/**
 * @see https://github.com/yargs/yargs/blob/master/docs/advanced.md#providing-a-command-module
 */
exports.command = 'init';
exports.describe = 'Create a new Lerna repo or upgrade an existing repo to the current version of Lerna.';

exports.builder = {
  exact: {
    describe: 'Specify lerna dependency version in package.json without a caret (^)',
    type: 'boolean',
  },
  independent: {
    describe: 'Version packages independently',
    alias: 'i',
    type: 'boolean',
  },
  'use-workspaces': {
    group: 'Command Options:',
    describe: 'Enable integration with Yarn workspaces.',
    type: 'boolean',
  },
};

exports.handler = function handler(argv) {
  return new InitCommand(argv);
};
