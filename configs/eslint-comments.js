import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments';

export default [
  {
    plugins: {
      '@eslint-community/eslint-comments': eslintCommentsPlugin,
    },
    rules: {
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: true },
      ],
      '@eslint-community/eslint-comments/no-aggregating-enable': 'off',
      '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
      '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
      // This is covered by ESLint configuration: linterOptions.reportUnusedDisableDirectives
      '@eslint-community/eslint-comments/no-unused-disable': 'off',
      // This is covered by ESLint configuration: linterOptions.reportUnusedDisableDirectives
      '@eslint-community/eslint-comments/no-unused-enable': 'off',
      '@eslint-community/eslint-comments/no-use': [
        'error',
        {
          allow: [
            'eslint-disable',
            'eslint-enable',
            'eslint-disable-next-line',
          ],
        },
      ],
    },
  },
];
