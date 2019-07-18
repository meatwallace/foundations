module.exports = {
  branch: 'master',
  plugins: [],
  verifyConditions: [],
  analyzeCommits: ['@semantic-release/commit-analyzer'],
  generateNotes: ['@semantic-release/release-notes-generator'],
  prepare: [
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
