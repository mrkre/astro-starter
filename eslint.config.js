import { defineConfig } from "eslint/config";

import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
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
	js.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		files: ["**/*.astro"],
		processor: "astro/client-side-ts",
		languageOptions: {
			parser: eslintPluginAstro.parser,
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: [".astro"],
				sourceType: "module",
				ecmaVersion: "latest",
			},
		},
		rules: {
			"prettier/prettier": "off",
		},
	},
	{
		files: ["**/*.{js,ts,tsx}"],
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			"prettier/prettier": "error",
		},
	},
	{
		rules: {
			semi: "error",
		},
	},
	{
		ignores: ["dist/**", "**/*.d.ts", ".github/", ".astro/"],
	},
]);
