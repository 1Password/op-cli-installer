import opLintConfig from "@1password/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config({
	extends: [opLintConfig],
	files: ["src/**/*.ts"],
	ignores: ["dist"],
	languageOptions: {
		parserOptions: {
			project: true,
		},
	},
});
