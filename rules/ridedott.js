module.exports = {
  rules: {
    '@ridedott/no-single-line-comment-block': [
      'error',
      {
        ignore: ['cspell'],
      },
    ],
    '@ridedott/no-template-literals-without-expression': [
      'error',
      { ignoreMultiline: true },
    ],
  },
};
