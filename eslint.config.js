import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    ignores: ['src/components/ui/**/*', '.vscode/**/*', 'node_modules/**/*'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJsxA11y,
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginJsxA11y.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'no-unused-disable': 'off',
      // Simple import sort rules
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React imports
            ['^react$', '^react-dom(/.*)?$', '^react-router-dom(/.*)?$'],
            // Other third-party imports
            ['^@?\\w'],
            // Absolute imports and other imports
            ['^@/'],
            // Relative imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // @common/styles imports
            ['^@common/styles/'],
            // Style imports
            ['^.+\\.css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      // New rules
      'space-before-function-paren': ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      'array-bracket-spacing': ['error', 'never'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['postcss.config.js', 'tailwind.config.ts', 'vite.config.ts'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
  prettierConfig,
];
