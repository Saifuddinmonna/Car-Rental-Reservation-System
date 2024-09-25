import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser,  // Use TypeScript parser for TS and JS files
      globals: {
        ...globals.node,  // This includes Node.js globals like `process`
        ...globals.browser  // Include browser globals if needed
      },
      ecmaVersion: 2021,  // Matches ES2021
      sourceType: 'module'
    },
    rules: {
      'no-undef': 'off',  // Turn off the no-undef rule
    },
  },
  pluginJs.configs.recommended,  // Recommended JS rules
  tseslint.configs.recommended,  // Recommended TS rules
];
