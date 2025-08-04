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
	// TypeScript config - only for .ts and .tsx files
	{
		files: ["**/*.ts", "**/*.tsx"],
		...typescriptEslint.configs.recommended,
	},
	// Astro config - for .astro files
	{
		files: ["**/*.astro"],
		...eslintPluginAstro.configs.recommended,
		languageOptions: {
			parser: eslintPluginAstro.parser,
			parserOptions: {
				extraFileExtensions: [".astro"],
				sourceType: "module",
				ecmaVersion: "latest",
			},
		},
		rules: {
			"no-undef": "off",
			"@typescript-eslint/no-explicit-any": "off",
		},
	},
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
		ignores: ["dist/**", "**/*.d.ts", ".github/"],
	},
]);
