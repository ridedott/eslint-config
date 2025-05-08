import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

export default [
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
];
