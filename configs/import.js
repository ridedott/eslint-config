import { flatConfigs } from 'eslint-plugin-import';

export default [
  {
    ...flatConfigs.recommended,
    rules: {
      ...flatConfigs.recommended.rules,
      // This rule conflicts with features provided by TypeScript.
      'import/namespace': 'off',
      'import/no-cycle': ['error', { maxDepth: Infinity }],
      'import/no-default-export': 'error',
      'import/no-self-import': 'error',
      'import/no-extraneous-dependencies': [
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
  },
  flatConfigs.typescript,
];
