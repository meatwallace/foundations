// @flow
module.exports = {
  branch: 'master',
  prepare: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    ['@semantic-release/git', {
      message: 'chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}',
    }]
  ],
  publish: [
    '@semantic-release/npm',
  ],
};
