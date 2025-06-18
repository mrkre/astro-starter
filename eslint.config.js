import { defineConfig } from "eslint/config";

import globals from "globals";
import js from "@eslint/js";
import typescriptEslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettier from "eslint-plugin-prettier";


export default defineConfig([
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
	},
	typescriptEslint.configs.recommended,
	eslintPluginAstro.configs.recommended,
	{
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			"prettier/prettier": "off",
		},
	},
	{
		rules: {
			semi: "error",
		},
	},
	{
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: typescriptEslint.parser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
        ecmaVersion: "latest",
        project: "./tsconfig.json",
      },
    },
    rules: {
      "no-undef": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
	{
    ignores: ["dist/**", "**/*.d.ts", ".github/"],
  },
]);
