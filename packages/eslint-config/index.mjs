// @lzr/eslint-config
// Ref: Engineering Handbook v2.0 — Seção 03 + 15

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      // Zero any (Seção 15)
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',

      // Naming conventions (Seção 15)
      '@typescript-eslint/naming-convention': ['error',
        { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'enumMember', format: ['UPPER_CASE'] },
      ],

      // Code Quality (Seção 03)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],

      // Error handling (Seção 08)
      '@typescript-eslint/no-floating-promises': 'error',

      // Security (Seção 01)
      'no-eval': 'error',
      'no-implied-eval': 'error',
    },
  },
  prettierConfig,
  { ignores: ['node_modules/', 'dist/', '.next/', 'coverage/'] },
);
