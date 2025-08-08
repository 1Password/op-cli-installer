import opLintConfig from "@1password/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config({
	extends: [opLintConfig],
	ignores: ["dist"],
	languageOptions: {
		parserOptions: {
			project: true,
		},
	},
});
