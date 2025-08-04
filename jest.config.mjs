const jestConfig = {
	moduleFileExtensions: ["ts", "js", "json"],
	rootDir: ".",
	testEnvironment: "node",
	testRegex: "(/__tests__/.*|(\\.|/)test)\\.ts",
	transform: {
		".ts": [
			"ts-jest",
			{
				useESM: true,
			},
		],
	},
	verbose: true,
};

export default jestConfig;
