const lintStagedConfig = {
	"*.{js,json,md,ts,yaml,yml}": "npm run format",
	"*.{ts}": ["npm run lint"],
};

export default lintStagedConfig;
