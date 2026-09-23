import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import autoImportGlobals from './.eslintrc-auto-import.json' with { type: 'json' };

export default defineConfig([
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.eslintrc-auto-import.json',
      '.vscode/**',
      'README.md',
      'package.json',
      'tsconfig.app.json',
      'tsconfig.node.json',
      'coverage/**'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...autoImportGlobals.globals
      }
    }
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.vue'],
    plugins: { vue: pluginVue },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...autoImportGlobals.globals
      },
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
      }
    },
    rules: {
      'no-undef': 'off'
    }
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended']
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended']
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended']
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended']
  },
  prettier
]);
