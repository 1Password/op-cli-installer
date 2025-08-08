const lintStagedConfig = {
	"*.{js,json,md,ts,yaml,yml}": "npm run format:write",
	"src/**/*.ts": ["npm run lint:fix"],
};

export default lintStagedConfig;
