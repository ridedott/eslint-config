import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/max-len': [
        'error',
        {
          code: 1024,
          comments: 80,
          ignorePattern: 'eslint-disable-next-line|eslint-(enable|disable)',
          ignoreUrls: true,
        },
      ],
      '@stylistic/multiline-comment-style': 'error',
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: '*', next: 'block' },
        { blankLine: 'always', prev: '*', next: 'class' },
        { blankLine: 'always', prev: '*', next: 'do' },
        { blankLine: 'always', prev: '*', next: 'for' },
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: '*', next: 'if' },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'switch' },
        { blankLine: 'always', prev: '*', next: 'throw' },
        { blankLine: 'always', prev: '*', next: 'try' },
        { blankLine: 'always', prev: '*', next: 'with' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: 'block', next: '*' },
        { blankLine: 'always', prev: 'class', next: '*' },
        { blankLine: 'always', prev: 'do', next: '*' },
        { blankLine: 'always', prev: 'for', next: '*' },
        { blankLine: 'always', prev: 'function', next: '*' },
        { blankLine: 'always', prev: 'if', next: '*' },
        { blankLine: 'always', prev: 'if', next: '*' },
        { blankLine: 'always', prev: 'throw', next: '*' },
        { blankLine: 'always', prev: 'try', next: '*' },
      ],
    },
  },
];
