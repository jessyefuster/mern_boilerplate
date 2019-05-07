module.exports = {
	displayName: "MERN boilerplate",
	rootDir: "client/",
	verbose: true,
	bail: true,
	collectCoverageFrom: [
		"**/*.{js,jsx}",
		"!**/*.test.{js,jsx}"
	],
	coverageThreshold: {
		global: {
			branches: 50,
			functions: 50,
			lines: 50,
			statements: 50
		}
	}
};