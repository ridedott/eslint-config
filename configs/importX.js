import { importX } from 'eslint-plugin-import-x';

export default [
  {
    plugins: {
      'import-x': importX,
    },
    rules: {
      // This rule conflicts with features provided by TypeScript.
      'import-x/namespace': 'off',
      'import-x/no-cycle': 'error',
      'import-x/no-default-export': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.spec.ts',
            '**/__tests__/**',
            '**/__mocks__/**',
            'monitoring/**',
            'scripts/**',
            'test/**',
            'dangerfile.ts',
          ],
          optionalDependencies: false,
          bundledDependencies: false,
        },
      ],
    },
    settings: {
      'import-x/extensions': ['.js', '.ts'],
    },
  },
];
