module.exports = {
  branch: 'master',
  plugins: [],
  verifyConditions: [
    // disabled to minimize overhead as it's executed for each package
    // '@semantic-release/git',
    // '@semantic-release/github',
    // fork of npm plugin's verifyConditions step is broken
    // '@semantic-release/npm',
  ],
  analyzeCommits: ['@semantic-release/commit-analyzer'],
  generateNotes: ['@semantic-release/release-notes-generator'],
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        message:
          // eslint-disable-next-line no-template-curly-in-string
          'chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  publish: ['@semantic-release/npm', '@semantic-release/github'],
};
