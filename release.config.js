module.exports = {
  branch: 'master',
  plugins: [],
  verifyConditions: [
    '@semantic-release/git',
    '@semantic-release/github',
    '@semantic-release/npm',
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
          'chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  publish: ['@semantic-release/npm', '@semantic-release/github'],
};
