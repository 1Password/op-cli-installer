const lintStagedConfig = {
	"*.{js,json,md,ts,yaml,yml}": "npm run format:check",
	"src/**/*.ts": ["npm run lint"],
};

export default lintStagedConfig;
