module.exports = {
  rules: {
    // Prettier automatically formats code, but can't format comments just yet:
    // https://github.com/prettier/prettier/issues/265
    'max-len': ['error', { code: 1024, comments: 80, ignoreUrls: true }],
  },
};
