// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist"]), // Ignore the build output directory
  {
    // Apply these rules to TypeScript and TSX files
    files: ["**/*.{ts,tsx}"],

    // Extend recommended configurations from ESLint, TypeScript ESLint,
    // React Hooks, and React Refresh (for Vite HMR)
    extends: [
      js.configs.recommended, // ESLint's recommended rules
      tseslint.configs.recommended, // TypeScript ESLint's recommended rules
      reactHooks.configs["recommended-latest"], // Latest recommended rules for React Hooks
      reactRefresh.configs.vite, // Rules specific to React Fast Refresh with Vite
    ],

    // Language options for parsing and environment
    languageOptions: {
      ecmaVersion: 2020, // Use ECMAScript 2020 features
      sourceType: "module", // Enable ES Modules syntax (import/export)
      globals: globals.browser, // Predefine browser global variables (e.g., window, document)
    },

    // Custom rules for your project
    rules: {
      // ✅ Quotes: Enforce double quotes, allowing single quotes if they avoid escaping
      quotes: ["error", "double", { avoidEscape: true }],

      // ✅ No unused variables: Warn about unused variables, ignoring those prefixed with '_'
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // ✅ No unused imports/modules: Warn about modules that are imported but not used
      // This rule requires a .eslintrc file (even empty) in the root for flat config.

      // ✅ Enforce ES Modules: Forbid CommonJS `require` and `module.exports`
      "no-restricted-syntax": [
        "error", // Treat as an error
        {
          selector: "CallExpression[callee.name='require']",
          message: "Use ES modules `import` instead of `require`.",
        },
        {
          selector:
            "MemberExpression[object.name='module'][property.name='exports']",
          message: "Use ES modules `export` instead of `module.exports`.",
        },
      ],

      // ✅ React: Some sensible strictness for React projects
      // These are often turned off for React 17+ with the new JSX transform
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      // Enforce rules of React Hooks
      "react-hooks/rules-of-hooks": "error",
      // Warn about missing dependencies in useEffect, useCallback, etc.
      "react-hooks/exhaustive-deps": "warn",
    },

    // Settings for plugins
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
]);
