/**
 * This configuration is used by the NPM package `git-cz` https://www.npmjs.com/package/git-cz, https://cz-git.qbb.sh/config.
 *
 * Inspired by Nx's repository https://github.com/nrwl/nx/blob/master/scripts/commitizen.js
 */
module.exports = {
  types: [
    { value: 'feat', name: 'feat:    A new feature' },
    { value: 'fix', name: 'fix:    A bug fix' },
    { value: 'docs', name: 'docs:    Documentation only changes' },
    {
      value: 'refactor',
      name: 'refactor:    Restructure the code, change the internal behavior of method. Neither fixes a bug nor adds a feature',
    },
    {
      value: 'improv',
      name: 'improv:    An improvement, neither a bug fix nor a refactoring',
    },
    {
      value: 'test',
      name: 'test:     Adding missing tests or correcting existing tests',
      emoji: ':white_check_mark:',
    },
    {
      value: 'build',
      name: 'build:    Changes that affect the build system or external dependencies',
      emoji: ':package:',
    },
    {
      value: 'ci',
      name: 'ci:       Changes to our CI configuration files and scripts',
      emoji: ':ferris_wheel:',
    },
    {
      value: 'chore',
      name: "chore:    Other changes that don't modify src or test files",
      emoji: ':hammer:',
    },
    {
      value: 'revert',
      name: 'revert:   Reverts a previous commit',
      emoji: ':rewind:',
    },
  ],
  scopes: [
    {
      name: 'react-tamagui',
      description: 'Anything related to the package react-tamagui',
    },
  ],
  allowEmptyScopes: true,
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
};
