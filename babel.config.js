module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
		plugins: [
			[
				"module-resolver",
				{
					root: ".",
					extensions: [
						".js",
						".jsx",
						".ts",
						".tsx"
					],
					alias: {
						"@components": "./src/components",
						"@screens": "./src/screens",
						"@styles": "./src/styles",
						"@hooks": "./src/hooks",
						"@global-types": "./src/@types",
						"@layouts": "./src/layouts",
					}
				}
			]
		]
  };
};
