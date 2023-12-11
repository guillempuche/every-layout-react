#!/usr/bin/env node

/**
 * Validate the commit message.
 *
 * Inspired by Nx's repository https://github.com/nrwl/nx/blob/master/scripts/commit-lint.js
 */

const { types, scopes } = require('./commit-lint.js');

console.log('Validating git commit message\n');

const gitMessage = require('child_process')
  .execSync('git log -1 --no-merges')
  .toString()
  .trim();

const allowedTypes = types.map((type) => type.value).join('|');
const allowedScopes = scopes.map((scope) => scope.name).join('|');

const commitMsgRegex = `(${allowedTypes})\\((${allowedScopes})\\)!?:\\s(([a-z0-9:-\s])+)`;

const matchCommit = new RegExp(commitMsgRegex, 'g').test(gitMessage);
const matchRevert = /Revert/gi.test(gitMessage);
const matchRelease = /Release/gi.test(gitMessage);
const exitCode = +!(matchRelease || matchRevert || matchCommit);

if (exitCode === 0) {
  console.log('Commit accepted\n');
} else {
  console.log(
    'Error:  Your commit message: \n' +
      '-------------------------------------------------------------------\n' +
      gitMessage +
      '\n-------------------------------------------------------------------' +
      '\n\n Does not follow the commit message convention specified in the Commit rules https://github.com/guillempuche/every-layout-react/blob/main/scripts/commitizen.js' +
      '\n\n To edit your last commit message type:\n\tgit commit --amend -m "your_new_message'
  );
  console.log('\ntype(scope): subject \n BLANK LINE \n body"');
  console.log('\n');
  console.log(`possible types: ${allowedTypes}`);
  console.log(`possible scopes: ${allowedScopes}`);
}
process.exit(exitCode);
