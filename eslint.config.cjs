// Flat config for ESLint v9 (simplified for this project)
const js = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const playwright = require('eslint-plugin-playwright');
const prettier = require('eslint-plugin-prettier');
const globals = require('globals');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  // Minimal ignores
  { ignores: ['node_modules/', 'dist/', 'playwright-report/', 'test-results/'] },

  // Base JS recommended
  js.configs.recommended,

  // Globals + Prettier everywhere
  {
    files: ['**/*'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.es2021, ...globals.node },
    },
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'off',
    },
  },

  // TypeScript rules
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { parser: tsParser },
    plugins: { '@typescript-eslint': tsPlugin, import: importPlugin },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },

  // Playwright tests
  {
    files: ['tests/**/*.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
    plugins: { playwright },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'playwright/no-skipped-tests': 'warn',
      'playwright/no-focused-tests': 'error',
    },
  },
];
