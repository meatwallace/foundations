// @flow
module.exports = {
  branch: 'master',
  plugins: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    ['@semantic-release/git', {
      message: 'chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}',
    }],
    '@semantic-release/github',
  ],
  // verifyConditions: [
  //   '@semantic-release/npm',
  //   '@semantic-release/git',
  // ],
  // prepare: [
  //   '@semantic-release/changelog',
  //   '@semantic-release/npm',
  //   ['@semantic-release/git', {
  //     message: 'chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}',
  //   }]
  // ],
  // publish: [
  //   '@semantic-release/npm',
  //   '@semantic-release/github',
  // ],
  // success: [
  //   '@semantic-release/github',
  // ],
  // fail: [
  //   '@semantic-release/github',
  // ]
};
